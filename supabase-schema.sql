import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://todgmbp1ju1edgxzxsuv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_eupY58zRGRRL7W3Ktu5P0g_jC2hCIg7';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

const DEFAULT_UPI = '7025144934@ptyes';
const RANGE_NAMES = ['കണ്ണപുരം', 'മാടായി', 'ചെറുകുന്ന്', 'പുതിയങ്ങാടി', 'മാട്ടൂൽ'];

function setQRCode(amount = 10, upi = DEFAULT_UPI) {
  const qr = document.getElementById('qrCode');
  if (!qr) return;

  const encoded = encodeURIComponent(`upi://pay?pa=${upi}&pn=SKSBV%20Madayi&am=${amount}&cu=INR`);
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encoded}`;
}

function updateSelectedAmount(amount) {
  const text = document.getElementById('selectedAmountText');
  if (text) text.textContent = `തുക: ₹${amount}`;

  const preview = document.getElementById('transactionPreview');
  if (preview) preview.textContent = DEFAULT_UPI;

  if (document.getElementById('amount')) {
    document.getElementById('amount').value = amount;
  }

  setQRCode(amount, DEFAULT_UPI);
}

function attachAmountButtons() {
  const buttons = document.querySelectorAll('.amount-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const value = Number(button.dataset.value || 10);
      updateSelectedAmount(value);
    });
  });
}

async function loadRangesIntoUI() {
  const rangeList = document.getElementById('rangeList');
  const rangeStatus = document.getElementById('rangeStatus');

  if (!rangeList) return;

  try {
    const { data, error } = await supabase.from('ranges').select('id, range_name').order('id', { ascending: true });

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      rangeList.innerHTML = data
        .map(
          (range) => `
            <div class="range-card">
              <div class="range-symbol">✦</div>
              <h3>${range.range_name}</h3>
            </div>
          `
        )
        .join('');

      if (rangeStatus) {
        rangeStatus.textContent = 'റേഞ്ച് വിവരങ്ങൾ വിജയകരമായി ലഭിച്ചു.';
      }
      return;
    }

    throw new Error('No range data found');
  } catch (error) {
    rangeList.innerHTML = RANGE_NAMES.map(
      (name) => `
        <div class="range-card">
          <div class="range-symbol">✦</div>
          <h3>${name}</h3>
        </div>
      `
    ).join('');

    if (rangeStatus) {
      rangeStatus.textContent = 'റേഞ്ച് ഡാറ്റ ലഭിച്ചില്ല; ഫFallback ലിസ്റ്റ് കാണിക്കുന്നു.';
    }
  }
}

function populateRangeSelect() {
  const select = document.getElementById('rangeSelect');
  if (!select) return;

  const options = [
    'കണ്ണപുരം',
    'മാടായി',
    'ചെറുകുന്ന്',
    'പുതിയങ്ങാടി',
    'മാട്ടൂൽ',
  ];

  options.forEach((item) => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
}

function setDefaultDonationData() {
  const upiInput = document.getElementById('upi');
  if (upiInput) upiInput.value = DEFAULT_UPI;

  const upiDisplay = document.getElementById('upiDisplay');
  if (upiDisplay) upiDisplay.textContent = DEFAULT_UPI;

  const preview = document.getElementById('transactionPreview');
  if (preview) preview.textContent = DEFAULT_UPI;

  const amountInput = document.getElementById('amount');
  if (amountInput) amountInput.value = 10;

  updateSelectedAmount(10);
}

async function handleDonationSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const payload = {
    name: formData.get('name')?.toString().trim(),
    madrasa: formData.get('madrasa')?.toString().trim(),
    range: formData.get('range')?.toString().trim(),
    amount: Number(formData.get('amount') || 0),
    upi: formData.get('upi')?.toString().trim() || DEFAULT_UPI,
    created_at: new Date().toISOString(),
  };

  if (!payload.name || !payload.madrasa || !payload.range || payload.amount <= 0) {
    window.alert('ദയവായി എല്ലാ ഫീൽഡുകളും ശരിയായി പൂരിപ്പിക്കുക.');
    return;
  }

  try {
    const { error } = await supabase.from('donations').insert(payload);

    if (error) {
      throw error;
    }

    window.alert('സംഭാവന രജിസ്റ്റർ ചെയ്തു. Thank you!');
    form.reset();
    setDefaultDonationData();
    window.location.href = 'admin.html';
  } catch (error) {
    console.error(error);
    window.alert('സംഭാവനം 저장ിക്കുന്നതിൽ പിഴവുണ്ടായി: ' + (error?.message || 'Unknown error'));
  }
}

async function loadDonationTable() {
  const tbody = document.getElementById('donationTableBody');
  if (!tbody) return;

  try {
    const { data, error } = await supabase.from('donations').select('*').order('created_at', { ascending: false }).limit(20);

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" class="empty-state">ഇതുവരെ ഒരു സംഭാവനയും ഇല്ല.</td></tr>';
      return;
    }

    tbody.innerHTML = data
      .map(
        (row) => `
          <tr>
            <td>${row.name || '-'}</td>
            <td>${row.madrasa || '-'}</td>
            <td>${row.range || '-'}</td>
            <td>₹${row.amount || 0}</td>
            <td>${row.upi || '-'}</td>
            <td>${new Date(row.created_at).toLocaleString('en-GB')}</td>
          </tr>
        `
      )
      .join('');
  } catch (error) {
    console.error(error);
    tbody.innerHTML = '<tr><td colspan="6" class="empty-state">ഡാറ്റ ലോഡ് ചെയ്യാനായില്ല.</td></tr>';
  }
}

window.copyUPI = function copyUPI() {
  navigator.clipboard.writeText(DEFAULT_UPI)
    .then(() => window.alert('UPI ID copied.'))
    .catch(() => window.alert('Copy failed. Please use: ' + DEFAULT_UPI));
};

window.addEventListener('DOMContentLoaded', () => {
  attachAmountButtons();
  populateRangeSelect();
  setDefaultDonationData();
  loadRangesIntoUI();

  const form = document.getElementById('donationForm');
  if (form) {
    form.addEventListener('submit', handleDonationSubmit);
  }

  loadDonationTable();
});






































































