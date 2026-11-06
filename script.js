* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #f6f3e9;
  --bg-2: #fffdf8;
  --card: #ffffff;
  --primary: #0f4e42;
  --primary-dark: #0a382f;
  --gold: #d7b76a;
  --gold-deep: #b48c3d;
  --text: #1d2a28;
  --muted: #536660;
  --line: #e9e0cd;
  --shadow: 0 16px 36px rgba(14, 58, 48, 0.09);
  --success: #22a16a;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Manjari', sans-serif;
  background: linear-gradient(180deg, #f7f4ea 0%, #f2f9f4 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select {
  font: inherit;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
}

.topbar {
  background: #0a3a30;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 8%;
  gap: 16px;
  flex-wrap: wrap;
}

.brand-wrap {
  display: flex;
  align-items: center;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  font-weight: 700;
  letter-spacing: 2px;
}

.logo span {
  color: var(--gold);
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.nav a {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.nav a:hover {
  color: var(--gold);
}

.hero {
  background: linear-gradient(160deg, #083d30 0%, #0d5b49 100%);
  color: white;
  padding: 80px 0 70px;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(215, 183, 106, 0.35);
  pointer-events: none;
}

.hero-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 36px;
  align-items: center;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.arabic {
  font-size: clamp(2.5rem, 4vw, 4rem);
  color: var(--gold);
  margin-bottom: 10px;
}

.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 5vw, 5.2rem);
  letter-spacing: 4px;
  line-height: 0.95;
  color: #f1d89d;
  margin-bottom: 16px;
}

.hero h2 {
  font-size: clamp(1.3rem, 2vw, 2rem);
  margin-bottom: 16px;
  color: #f7f0dd;
}

.hero p {
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.8);
  max-width: 620px;
  margin-bottom: 10px;
}

.cta-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.cta-row.center {
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--gold), #e8c76b);
  color: #1d2d2d;
  box-shadow: 0 12px 22px rgba(215, 183, 106, 0.25);
}

.btn-secondary {
  background: #fff7dd;
  color: #6b4d15;
  border: 1px solid #ebd295;
}

.hero-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 24px;
  padding: 22px;
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow);
}

.qr-box {
  width: 220px;
  height: 220px;
  margin: 0 auto 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 8px;
}

.qr-box img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.upi-box {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 12px 14px;
  text-align: center;
  font-weight: 700;
  word-break: break-all;
}

.copy-btn {
  width: 100%;
  margin-top: 14px;
  background: rgba(255, 255, 255, 0.09);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 14px;
  font-weight: 700;
  cursor: pointer;
}

.section {
  padding: 62px 0;
}

.alt-bg {
  background: #fffdf7;
}

.section-title {
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--primary-dark);
  margin-bottom: 18px;
  text-align: center;
}

.intro {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.9;
  color: var(--muted);
  font-size: 1.06rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 22px;
  margin-top: 36px;
}

.card,
.range-card,
.page-card,
.form-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.card {
  padding: 28px 22px;
  text-align: center;
}

.symbol {
  font-size: 2.1rem;
  color: var(--gold-deep);
  margin-bottom: 12px;
}

.card h3 {
  margin-bottom: 10px;
  color: var(--primary);
  font-size: 1.5rem;
}

.card p {
  color: var(--muted);
  line-height: 1.8;
}

.range-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 28px;
}

.range-card {
  padding: 22px 14px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff, #f5f8f5);
}

.range-symbol {
  font-size: 1.8rem;
  color: var(--gold-deep);
  margin-bottom: 8px;
}

.range-card h3 {
  color: var(--primary);
  font-size: 1.2rem;
}

.loading {
  color: var(--muted);
  font-weight: 700;
}

.status-text {
  text-align: center;
  color: var(--muted);
  margin-top: 16px;
  font-weight: 700;
}

.progress-strip {
  background: linear-gradient(135deg, #0c4339 0%, #1f7557 100%);
  color: white;
  padding: 62px 0;
  text-align: center;
}

.progress-wrap h2 {
  font-size: clamp(1.6rem, 2vw, 2.5rem);
  color: #f5d98c;
  margin-bottom: 10px;
}

.amount {
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 700;
  color: #f4dc8d;
  margin-bottom: 12px;
}

.progress-wrap p {
  max-width: 720px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
}

.section-wrap {
  padding: 52px 0 72px;
}

.page-card,
.form-card {
  padding: 32px 26px;
}

.page-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 3vw, 3rem);
  color: var(--primary-dark);
  margin-bottom: 20px;
}

.page-card p {
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 16px;
}

.donation-form {
  display: block;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-full {
  grid-column: 1 / -1;
}

label {
  color: var(--primary-dark);
  font-weight: 700;
}

input, select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fcfdfb;
  padding: 12px 14px;
  color: var(--text);
  outline: none;
}

input:focus,
select:focus {
  border-color: rgba(15, 78, 66, 0.35);
  box-shadow: 0 0 0 4px rgba(15, 78, 66, 0.08);
}

.quick-amounts {
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  gap: 12px;
}

.amount-btn {
  min-height: 72px;
  border: 1px solid #c5d9d0;
  border-radius: 14px;
  background: linear-gradient(180deg, #f6faf8, #edf5ef);
  color: var(--primary-dark);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.amount-btn.active {
  background: linear-gradient(135deg, var(--primary), #1a7b61);
  color: white;
  border-color: transparent;
  box-shadow: 0 14px 28px rgba(15, 78, 66, 0.18);
}

.qr-area {
  width: 220px;
  height: 220px;
  margin-top: 10px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #f8f7f3;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 10px;
}

.qr-area img {
  border-radius: 14px;
}

.selected-amount {
  margin-top: 12px;
  color: var(--primary);
  font-weight: 700;
}

.submit-row {
  margin-top: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.table-wrap {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 820px;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid var(--line);
  padding: 12px 10px;
  text-align: left;
  vertical-align: top;
}

th {
  background: #f5f7f5;
  color: var(--primary-dark);
  font-weight: 700;
}

.empty-state {
  padding: 18px;
  color: var(--muted);
  text-align: center;
}

.footer {
  background: #052d25;
  color: #dfeceb;
  text-align: center;
  padding: 26px 14px;
  line-height: 1.8;
}

@media (max-width: 820px) {
  .hero-inner,
  .form-grid,
  .card-grid,
  .range-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 70px;
  }

  .quick-amounts {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
}

@media (max-width: 640px) {
  .topbar {
    justify-content: center;
    text-align: center;
  }

  .nav {
    justify-content: center;
  }

  .submit-row {
    flex-direction: column;
    align-items: stretch;
  }
}




































































