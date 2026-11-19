import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, Clock3, Globe2,
  MapPin, Menu, Plane, PlaneTakeoff, ShieldCheck, Sparkles, Ticket,
  Utensils, X, Luggage, Star, Camera, Play, ArrowLeftRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import f1 from"/public/image/f1.jpg";
import f2 from"/public/image/b.jpg";
import f3 from"/public/image/p.jpg";
import f4 from"/public/image/e.jpg";

const wonders = [
  { name: "Taj Mahal", place: "Agra, India", price: "₹18,900", days: "3 days", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85", detail: "A sunrise visit to the marble monument of eternal love, with a guided heritage walk." },
  { name: "Great Wall", place: "China", price: "₹64,900", days: "6 days", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=85", detail: "Walk along ancient watchtowers and take in the dramatic mountain scenery." },
  { name: "Petra", place: "Jordan", price: "₹72,500", days: "5 days", image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=900&q=85", detail: "Explore rose-red architecture carved into sandstone cliffs." },
  { name: "Colosseum", place: "Rome, Italy", price: "₹89,900", days: "6 days", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=85", detail: "Discover the stories of ancient Rome with a local expert." },
  { name: "Machu Picchu", place: "Peru", price: "₹1,49,900", days: "8 days", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85", detail: "A once-in-a-lifetime journey through the Andes to the Inca citadel." },
  { name: "pyramids", place: "Egpty", price: "₹1,29,900", days: "8 days", image: f4, detail: "Experience the remarkable Mayan city and its surrounding culture." },
  { name: "Christ the Redeemer", place: "Rio, Brazil", price: "₹1,19,900", days: "7 days", image: f2, detail: "See Rio from above and enjoy its beaches, viewpoints and vibrant streets." },
  {
  name: "Eiffel Tower",
  place: "Paris, France",
  price: "₹79,900",
  days: "5 days",
  image: f3,
  detail: "Discover Paris, enjoy the Eiffel Tower and explore the beautiful streets of France."
},

{
  name: "Sydney Opera House",
  place: "Sydney, Australia",
  price: "₹99,900",
  days: "6 days",
  image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=85",
  detail: "Explore Sydney Harbour, the Opera House and Australia's beautiful coastal city."
}
];

const classOptions = [
  { name: "Economy", price: "₹8,499", note: "Comfort made simple", perks: ["Complimentary cabin baggage", "Fresh meal & refreshments", "Standard seat selection"] },
  { name: "Business", price: "₹24,999", note: "A little more room to arrive", perks: ["Priority check-in & boarding", "Premium dining selection", "Extra legroom and lounge access"] },
  { name: "First Class", price: "₹49,999", note: "Your own quiet corner above the clouds", perks: ["Private suite-style seating", "Chef-curated dining", "Dedicated concierge service"] },
];

const tickerItems = [
  "CHENNAI → DELHI · BOARDING 18:40 · GATE 06",
  "BENGALURU → MUMBAI · BOARDING 19:15 · GATE 12",
  "CHENNAI → DUBAI · CHECK-IN OPEN · TERMINAL 2",
  "BENGALURU → PARIS · DEPARTURE 22:30 · TERMINAL 1",
];

function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <motion.div className="intro-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .65 }}>
      <div className="intro-grain" />
      <div className="intro-top"><span>H</span><small>HEAVEN AIRWAYS</small></div>
      <div className="intro-copy">
        <p>PLAN SMART.<br />TRAVEL FAR.<br />SPEND LESS.</p>
        <div className="intro-rule" />
        <h1>BEST<br />BUDGET-FRIENDLY<br />COUNTRIES</h1>
        <h2>TO VISIT FROM INDIA<br />IN 2026</h2>
        <ul><li>Affordable getaways</li><li>Unforgettable experiences</li><li>Big adventures, small budget</li></ul>
      </div>
      <motion.div className="intro-plane" initial={{ y: 190, x: -5, opacity: 0 }} animate={{ y: -260, x: 20, opacity: 1 }} transition={{ duration: 2.65, ease: [0.22, 0.7, 0.25, 1] }}>
        <svg viewBox="0 0 160 250" role="img" aria-label="Airplane flying upward"><path d="M80 5 C70 10 68 34 67 65 L5 112 Q1 118 8 120 L67 103 L70 190 L43 216 L43 225 L80 211 L117 225 L117 216 L90 190 L93 103 L152 120 Q159 118 155 112 L93 65 C92 34 90 10 80 5Z" fill="#e9f7ff" stroke="#9fc8db" strokeWidth="1.5"/><path d="M80 17 L80 198" stroke="#a8c8d8" strokeWidth="2"/><path d="M73 70 L87 70 M73 82 L87 82 M73 94 L87 94" stroke="#b4d1df" strokeWidth="2"/></svg>
      </motion.div>
      <div className="intro-bottom"><span>EST. 2010</span><span>YOUR JOURNEY, OUR PROMISE</span><span>INDIA · WORLDWIDE</span></div>
      <div className="intro-progress"><i /></div>
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return <div className={`section-heading ${light ? "light" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tripType, setTripType] = useState("Round trip");
  const [travelClass, setTravelClass] = useState("Economy");
  const [passengers, setPassengers] = useState(1);
  const [selectedWonder, setSelectedWonder] = useState(null);
  const [bookingMessage, setBookingMessage] = useState("");
  const [from, setFrom] = useState("Chennai (MAA)");
  const [to, setTo] = useState("Delhi (DEL)");

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingMessage(`${from} to ${to} · ${passengers} passenger${passengers > 1 ? "s" : ""} · ${travelClass}. This is a demo search; live fares are not connected.`);
  };

  return (
    <AnimatePresence mode="wait">
      {showIntro ? <Intro key="intro" onFinish={() => setShowIntro(false)} /> : (
        <motion.div className="site-shell" key="site" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7 }}>
          <div className="announcement"><span>✦</span> THE WORLD IS CLOSER THAN YOU THINK <span>✦</span> DISCOVER HEAVEN'S SEASONAL FARES</div>
          <header className="navbar">
            <a href="#home" className="brand"><span className="brand-mark">H</span><span>HEAVEN<small> AIRWAYS</small></span></a>
            <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
            <nav className={menuOpen ? "nav-links open" : "nav-links"}>{["Home", "Destinations", "Our Story", "Cabins", "Travel Notes"].map((item, i) => <a key={item} href={["#home", "#wonders", "#about", "#cabins", "#views"][i]} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>
            <a className="nav-cta" href="#booking">Plan your flight <ArrowUpRight size={15} /></a>
          </header>

          <main>
            <section className="hero" id="home">https
              <video className="hero-video" autoPlay muted loop playsInline>
              <source
  src={`${import.meta.env.BASE_URL}videos/flight-hero.mp4`}
  type="video/mp4"
/>
              </video>
              <div className="hero-overlay" />
              <div className="hero-content">
                
                <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="hero-kicker"><span /> THE ART OF GOING FURTHER</motion.div>
                <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}>Somewhere<br /><em>extraordinary</em><br />is calling.</motion.h1>
                <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }}>Thoughtful journeys. Remarkable views. A better way to see the world, beginning right here in India.</motion.p>
               
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="hero-actions"><a href="#booking" className="gold-button">Find your flight <ArrowRight size={17} /></a><a href="#wonders" className="text-link">Explore destinations <ArrowUpRight size={16} /></a></motion.div>

                 <br></br>
              </div>
              <br></br>
              <div className="hero-side-note">12°58' N &nbsp; 80°14' E <span /> MADE FOR THE CURIOUS</div>
              
            </section>

            <div className="flight-ticker"><div className="ticker-label"><PlaneTakeoff size={16} /> FLIGHT BOARD</div><div className="ticker-track">{[...tickerItems, ...tickerItems].map((t, i) => <span key={i}>{t}<b> ✦ </b></span>)}</div></div>

            <section className="booking-section" id="booking">
              <div className="booking-intro"><span className="eyebrow">YOUR NEXT CHAPTER</span><h2>Where shall we<br /><em>take you?</em></h2><p>Choose a direction. We’ll take care of the details.</p><div className="booking-assurance"><ShieldCheck size={17} /> Secure booking experience <span /> <Globe2 size={17} /> 40+ destinations</div></div>
              <form className="booking-card" onSubmit={handleBooking}>
                <div className="booking-tabs">{["Round trip", "One way", "Multi-city"].map(t => <button type="button" className={tripType === t ? "active" : ""} onClick={() => setTripType(t)} key={t}>{t}</button>)}</div>
                <div className="booking-grid">
                  <label className="field"><span>FROM</span><div><MapPin size={17} /><select value={from} onChange={e => setFrom(e.target.value)}><option>Chennai (MAA)</option><option>Bengaluru (BLR)</option><option>Mumbai (BOM)</option><option>Delhi (DEL)</option><option>Hyderabad (HYD)</option></select></div></label>
                  <button className="swap-button" type="button" onClick={() => { setFrom(to); setTo(from); }} aria-label="Swap airports"><ArrowLeftRight size={17} /></button>
                  <label className="field"><span>TO</span><div><MapPin size={17} /><select value={to} onChange={e => setTo(e.target.value)}><option>Delhi (DEL)</option><option>Dubai (DXB)</option><option>Singapore (SIN)</option><option>Paris (CDG)</option><option>Rome (FCO)</option><option>Bengaluru (BLR)</option></select></div></label>
                  <label className="field"><span>DEPARTURE</span><div><CalendarDays size={17} /><input type="date" defaultValue="2026-12-12" /></div></label>
                  {tripType === "Round trip" && <label className="field"><span>RETURN</span><div><CalendarDays size={17} /><input type="date" defaultValue="2026-12-19" /></div></label>}
                  <label className="field"><span>PASSENGERS</span><div><Luggage size={17} /><select value={passengers} onChange={e => setPassengers(Number(e.target.value))}>{[1,2,3,4,5,6].map(n => <option value={n} key={n}>{n} passenger{n > 1 ? "s" : ""}</option>)}</select></div></label>
                  <label className="field"><span>CABIN</span><div><Ticket size={17} /><select value={travelClass} onChange={e => setTravelClass(e.target.value)}><option>Economy</option><option>Business</option><option>First Class</option></select></div></label>
                </div>
                <div className="booking-submit-row"><p><ShieldCheck size={15} /> Prices shown in Indian Rupees (INR)</p><button className="gold-button" type="submit">Search flights <ArrowRight size={17} /></button></div>
                {bookingMessage && <div className="booking-result">{bookingMessage}</div>}
              </form>
            </section>

              
            <section className="wonders-section section-pad" id="wonders">
              <div className="wonders-top"><SectionHeading eyebrow="THE WORLD, WELL DISCOVERED" title={<>Seven wonders.<br /><em>One unforgettable</em> story.</>} text="Carefully imagined journeys from India to the places that stay with you long after you return." /><div className="side-note">CURATED ESCAPES <span>2026 COLLECTION</span></div></div>
              <div className="wonder-grid">
                {wonders.map((w, i) => <motion.button className="wonder-card" key={w.name} onClick={() => setSelectedWonder(w)} whileHover={{ y: -9 }} transition={{ duration: .3 }}>
                  
                  <div className="wonder-image"><img src={w.image} alt={w.name} loading="lazy" />
              <span className="wonder-location">
  {w.place}
</span>
              
              <span className="wonder-open"><ArrowUpRight /></span></div><div className="wonder-info"><div><h3>{w.name}</h3><p>{w.place} · {w.days}</p></div><strong style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600, fontStyle: "normal", letterSpacing: "normal", transform: "none" }}>From {w.price}</strong></div></motion.button>)}</div>
              <p className="price-note">* Illustrative package estimates per person from India. Final prices depend on dates, availability and inclusions.</p>
            </section>

            <section className="about-section section-pad" id="about">
              <div className="about-copy"><span className="eyebrow">A LITTLE ABOUT US</span><h2>We believe the<br />journey should feel<br /><em>as beautiful as<br />the destination.</em></h2><p className="about-lead">Heaven began in 2010 with a simple thought: travel should open doors, not create barriers.</p><p>From our first carefully planned routes to a growing network connecting travellers with extraordinary places, our purpose has stayed the same. We bring thoughtful planning, warm hospitality and a sense of wonder to every mile.</p><div className="stats-row"><div><strong>1L+</strong><span>travellers served</span></div><div><strong>40+</strong><span>destinations</span></div><div><strong>15 yrs</strong><span>of journeys</span></div></div><a href="#footer" className="under-link">Get to know Heaven <ArrowUpRight size={16} /></a></div>
              <div className="about-visual"><img src={f1} alt="India at night from above with glowing lights" /><div className="map-caption"><span className="map-dot" /> INDIA, OUR HOME IN THE WORLD <small>ROUTES THAT BRING US CLOSER</small></div><div className="route-line" /><div className="plane-stamp"><Plane size={25} /></div><div className="about-image-tag">ROOTED IN INDIA<br /><b>BOUND FOR EVERYWHERE.</b></div></div>
            </section>

            <section className="cabins-section section-pad" id="cabins">
              <SectionHeading eyebrow="TRAVEL YOUR WAY" title={<>Three cabins.<br /><em>Your kind of comfort.</em></>} text="From the essentials to the exceptional, find the space that suits your journey." />
              <div className="cabin-grid">{classOptions.map((c, i) => <motion.div className={`cabin-card cabin-${i}`} key={c.name} whileHover={{ y: -8 }}><div className="cabin-top"><span>0{i + 1} / CABIN</span><Plane size={20} /></div><h3>{c.name}</h3><p>{c.note}</p><div className="cabin-price">{c.price}<small> / one way, from</small></div><div className="cabin-divider" /><ul>{c.perks.map(p => <li key={p}><span>✦</span>{p}</li>)}</ul><a href="#booking">Choose {c.name} <ArrowUpRight size={16} /></a></motion.div>)}</div>
              <div className="dining-strip"><div className="dining-icon"><Utensils /></div><div><span className="eyebrow">A TASTE ABOVE THE CLOUDS</span><h3>Good journeys deserve good food.</h3><p>Economy: fresh regional meal · Business: curated multi-course menu · First Class: chef-inspired dining with advance selection.</p></div><span className="dining-aside">MENUS VARY BY ROUTE</span></div>
              <p className="price-note">* Sample promotional fares for design demonstration only; not live or bookable fares.</p>
            </section>

            <section className="views-section" id="views">
              <div className="views-image"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90" alt="Himalayan mountain peaks above the clouds" /></div><div className="views-content"><span className="eyebrow">THE WINDOW SEAT EDITION</span><h2>Some views are<br /><em>worth waking up for.</em></h2><p>Cross the Himalayas in the morning light. Follow the silver curve of the Arabian Sea. Watch the world change colour from your window seat.</p><div className="view-tags"><span>01 · THE HIMALAYAS</span><span>02 · ARABIAN SEA</span><span>03 · WESTERN GHATS</span></div><a href="#booking" className="gold-button">Find a window seat <ArrowRight size={16} /></a></div>
            </section>

            <section className="testimonials section-pad"><SectionHeading eyebrow="KIND WORDS, MILES LATER" title={<>Stories that travel<br /><em>with us.</em></>} /><div className="review-grid"><article><div className="stars">★★★★★</div><p>“The little details made the whole trip feel effortless. I could simply enjoy being somewhere new.”</p><b>ANANYA R.</b><span>CHENNAI · ROME JOURNEY</span></article><article><div className="stars">★★★★★</div><p>“Warm people, clear communication and a lovely experience from the first call to the return home.”</p><b>RAHUL M.</b><span>BENGALURU · DUBAI JOURNEY</span></article><article><div className="stars">★★★★★</div><p>“A beautiful way to plan our family holiday. The itinerary gave us room to explore at our own pace.”</p><b>PRIYA S.</b><span>COIMBATORE · AGRA JOURNEY</span></article></div><p className="price-note">* Sample testimonial content for the website design. Replace with verified customer reviews before publishing.</p></section>

            <section className="newsletter"><div><span className="eyebrow">LET GOOD PLACES FIND YOU</span><h2>A little inspiration<br /><em>for your next take-off.</em></h2></div><form onSubmit={e => {e.preventDefault(); alert("Thank you! Newsletter signup demo.");}}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div><input id="email" type="email" required placeholder="you@example.com" /><button aria-label="Subscribe"><ArrowRight /></button></div><small>Travel notes, thoughtful offers and new routes. No noise.</small></form></section>
          </main>

          <footer id="footer" className="footer"><div className="footer-main"><div className="footer-brand"><a href="#home" className="brand"><span className="brand-mark">H</span><span>HEAVEN<small> AIRWAYS</small></span></a><p>Thoughtful journeys from India to everywhere. Travel well. Feel more.</p>
         <div className="socials">
  <a href="#footer" aria-label="Instagram">
    <Camera />
  </a>

  <a href="#footer" aria-label="Facebook">
    <Globe2 />
  </a>

  <a href="#footer" aria-label="YouTube">
    <Play />
  </a>
</div>
          
  </div><div><h4>EXPLORE</h4><a href="#wonders">Destinations</a><a href="#cabins">Cabin classes</a><a href="#views">Window seat stories</a><a href="#about">Our story</a></div><div><h4>HELP & SUPPORT</h4><a href="#footer">Manage booking</a><a href="#footer">Flight status</a><a href="#footer">Baggage information</a><a href="#footer">Cancellation policy</a><a href="#footer">Travel assistance</a></div><div><h4>GET IN TOUCH</h4><p>Care that goes places.</p><a href="mailto:hello@heavenairways.example">hello@heavenairways.example</a><span>India · Worldwide</span></div></div><div className="footer-bottom"><span>© 2026 HEAVEN AIRWAYS. DESIGN CONCEPT.</span><span>FARES, REVIEWS & FLIGHT BOARD ARE DEMO CONTENT.</span><a href="#home">BACK TO TOP ↑</a></div></footer>

          <AnimatePresence>{selectedWonder && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedWonder(null)}><motion.div className="wonder-modal" initial={{ y: 35, scale: .96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }} onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelectedWonder(null)} aria-label="Close"><X /></button><img src={selectedWonder.image} alt={selectedWonder.name} /><div className="modal-body"><span className="eyebrow">HEAVEN SIGNATURE ESCAPE</span><h2>{selectedWonder.name}</h2><p>{selectedWonder.detail}</p><div className="modal-price"><strong>{selectedWonder.price}</strong><span>estimated package · {selectedWonder.days}</span></div><a className="gold-button" href="#booking" onClick={() => setSelectedWonder(null)}>Plan this journey <ArrowRight size={16} /></a></div></motion.div></motion.div>}</AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
