import { useMemo, useState } from 'react'
import { ArrowRight, Check, IndianRupee, Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const tests = [
  ['116', 'Blood Sugar (AM + Insulin)', 'Blood Sugar', 100],
  ['117', 'Blood Sugar (PP)', 'Blood Sugar', 100],
  ['118', 'Blood Sugar (R)', 'Blood Sugar', 100],
  ['119', 'Blood Sugar (AM + Drug)', 'Blood Sugar', 100],
  ['120', 'S. Bilirubin (Direct)', 'Liver', 100],
  ['121', 'S. Bilirubin (Indirect)', 'Liver', 100],
  ['122', 'S.G.O.T.', 'Liver', 200],
  ['123', 'S.G.P.T.', 'Liver', 200],
  ['124', 'Total Proteins', 'Biochemistry', 300],
  ['125', 'Albumin', 'Biochemistry', 200],
  ['126', 'Globulin', 'Biochemistry', 200],
  ['127', 'A.G. Ratio', 'Biochemistry', 150],
  ['128', 'S. Alkaline Phosphatase', 'Liver', 200],
  ['130', 'B.U.N.', 'Kidney', 200],
  ['131', 'S. Creatinine', 'Kidney', 150],
  ['132', 'S. Uric Acid', 'Kidney', 200],
  ['133', 'S. Sodium', 'Electrolytes', 200],
  ['134', 'S. Potassium', 'Electrolytes', 200],
  ['135', 'S. Calcium', 'Calcium', 200],
  ['136', 'S. Phosphorus', 'Biochemistry', 400],
  ['137', 'A.P.T.T.', 'Coagulation', 500],
  ['138', 'Acid Phosphatase', 'Biochemistry', 400],
  ['141', 'L.D.H.', 'Biochemistry', 700],
  ['142', 'Glycosylated Hb% (HbA1c)', 'Blood Sugar', 800],
  ['143', 'Chloride', 'Electrolytes', 200],
  ['145', 'Phospholipids', 'Lipids', 100],
  ['146', 'S. Carbonate', 'Electrolytes', 100],
  ['147', 'Triglycerides', 'Lipids', 300],
  ['148', 'Cholesterol', 'Lipids', 300],
  ['149', 'HDL Cholesterol', 'Lipids', 150],
  ['150', 'L.D.L.', 'Lipids', 350],
  ['151', 'V.L.D.L.', 'Lipids', 100],
  ['98', 'Blood Sugar (R + Drug)', 'Blood Sugar', 100],
  ['99', 'Blood Sugar (A/G)', 'Blood Sugar', 100],
  ['152', 'S. Lipase', 'Biochemistry', 700],
  ['AM', 'Serum Amylase', 'Biochemistry', 700],
  ['BS', 'Blood Sugar (F)', 'Blood Sugar', 100],
  ['CD', 'C.P.K.-MB', 'Cardiac', 1200],
  ['CP', 'Coagulation Profile', 'Coagulation', 700],
  ['CPK', 'C.P.K.-NAC', 'Cardiac', 1500],
  ['DE', 'Diabetes Evaluation', 'Blood Sugar', 200],
  ['EL', 'Serum Electrolyte', 'Electrolytes', 600],
  ['FC', 'Free Calcium', 'Calcium', 300],
  ['KFT', 'Blood Urea', 'Kidney', 200],
  ['KFT1', 'Kidney Function Test', 'Profiles', 900],
  ['LFT', 'Liver Function Test', 'Profiles', 800],
  ['CBC', 'Complete Blood Count', 'Haematology', 400],
  ['ESR', 'Erythrocyte Sedimentation Rate', 'Haematology', 100],
  ['LIP', 'Total Lipids', 'Lipids', 700],
  ['LPRO', 'Total Lipid Profile', 'Profiles', 700],
  ['LT', 'S. Bilirubin (Total)', 'Liver', 150],
  ['NCA', 'n. Calcium', 'Calcium', 200],
  ['PH', 'pH', 'Biochemistry', 200],
  ['RFT', 'Renal Function Test', 'Profiles', 900],
  ['S.CAL', 'i. Calcium', 'Calcium', 300],
  ['SA', 'SAAG', 'Biochemistry', 900],
  ['SCAL', 'i. Calcium', 'Calcium', 200],
  ['SIRON', 'S.A.D.A.', 'Biochemistry', 700],
  ['TCA', 't. Calcium', 'Calcium', 200],
  ['USF', 'Urine Sugar (F)', 'Urine', 100],
  ['USP', 'Urine Sugar (PP)', 'Urine', 100],
  ['VITD3', 'Vitamin D3', 'Vitamins', 1500],
  ['VITB12', 'Vitamin B12', 'Vitamins', 1200],
]

const categories = ['All', ...new Set(tests.map(([, , group]) => group))]
const formatPrice = (price) => new Intl.NumberFormat('en-IN').format(price)

export default function TestsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return tests.filter(([code, name, group]) =>
      (category === 'All' || group === category) &&
      (!q || `${code} ${name} ${group}`.toLowerCase().includes(q)),
    )
  }, [query, category])

  const clearFilters = () => {
    setQuery('')
    setCategory('All')
  }

  return <>
    <section className="page-hero"><div className="container">
      <span className="eyebrow">Test directory</span>
      <h1>Find the right test for your health needs.</h1>
      <p className="lead">Search our available laboratory tests by test name, code, or category and view the current price before booking.</p>
    </div></section>
    <section className="section test-directory"><div className="container">
      <div className="search-panel">
        <label className="test-search"><Search size={21}/><span className="sr-only">Search tests</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by test name, code or category..."/>{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={18}/></button>}</label>
        <div className="filter-chips" aria-label="Filter tests by category">{categories.map((item) => <button type="button" key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
      </div>
      <div className="result-row"><strong>{filtered.length} {filtered.length === 1 ? 'test' : 'tests'} found</strong>{(query || category !== 'All') && <button type="button" className="clear-filter" onClick={clearFilters}>Clear all filters</button>}</div>
      {filtered.length ? <div className="cards">{filtered.map(([code, title, group, price]) => <article className="card test-card" key={`${code}-${title}`}>
        <div className="test-card-head"><span className="test-category">{group}</span><span className="test-code">Code: {code}</span></div>
        <h3>{title}</h3>
        <div className="test-price"><IndianRupee size={20}/><strong>{formatPrice(price)}</strong></div>
        <Link className="text-link" to="/contact">Request test <ArrowRight size={16}/></Link>
      </article>)}</div> : <div className="empty-state"><Search size={34}/><h2>No matching tests found</h2><p>Try a shorter term, choose another category, or contact our team for help.</p><button type="button" className="button button-dark" onClick={clearFilters}>Show all tests</button></div>}
    </div></section>
    <section className="section soft-section"><div className="container split"><div><span className="eyebrow">Before your appointment</span><h2>A little preparation makes your visit smoother.</h2><p className="lead">Preparation varies by test. Confirm instructions with our team when you book.</p></div><ul className="check-list"><li><Check size={19}/>Bring your prescription or previous reports, if available.</li><li><Check size={19}/>Follow any fasting instructions shared while booking.</li><li><Check size={19}/>Tell our team about medication or ongoing conditions.</li><li><Check size={19}/>Carry a valid ID and arrive a few minutes early.</li></ul></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">Understanding your test</span><h2>Helpful answers before you visit.</h2></div></div><div className="cards"><article className="card"><h3>Do all tests need fasting?</h3><p>No. Only selected tests require fasting. We confirm the exact preparation when your appointment is scheduled.</p></article><article className="card"><h3>Can I bring a prescription?</h3><p>Yes. It helps our team identify the exact investigation and related panels requested by your doctor.</p></article><article className="card"><h3>When will my report be ready?</h3><p>Turnaround depends on the investigation. You receive a clear expected time during collection.</p></article></div></div></section>
    <div className="container cta-band"><h2>Still unsure which test you need?</h2><Link className="button button-lime" to="/contact">Ask our team</Link></div>
  </>
}
