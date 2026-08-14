"use client";

import { useState, useEffect } from "react";

const captions = [
  // 1. Short & Punchy Trance Lines
  "Lost in the frequency.",
  "Bassline in my veins.",
  "Turn down the world, turn up the trance.",
  "Floating on 138 BPM.",
  "Sound on, reality off.",
  "Driven by the drop.",
  "Synths and sunrise.",
  "Controlled by the beat.",
  "Pure sonic elevation.",
  "Rhythm is my religion.",

  // 2. Deep, Atmospheric & Cosmic Vibes
  "Gravity disappears when the synth hits.",
  "Lost between the drop and the echo.",
  "Echoes of eternity in a single beat.",
  "Floating through a sea of soundwaves.",
  "Searching for peace in the highest frequencies.",
  "The universe speaks in electronic signals.",
  "Mind off, soul attuned to the frequency.",
  "Wandering through soundscapes created in light and dark.",
  "We are made of stardust and heavy basslines.",
  "Beyond the horizon where the trance takes over.",

  // 3. Festival, Rave & Dancefloor Energy
  "High-octane synths and midnight lights.",
  "The laser beams are my therapy.",
  "Losing control to find myself on the dancefloor.",
  "Surrounded by strangers, connected by the exact same beat.",
  "No sleep, just sound.",
  "When the laser cuts the darkness, we rise.",
  "Sweat, bass, and endless movement.",
  "Built for the front row.",
  "Dancing until the sun replaces the lasers.",
  "The speaker stack is my sanctuary.",

  // 4. Psytrance & Trippy Captions
  "Tripping on frequencies, not friction.",
  "Entering the psytrance dimensional portal.",
  "Sacred geometry written in 140 BPM.",
  "Mind expansion via sound waves.",
  "The tribal beat of the digital age.",
  "Hypnotized by the rolling bassline.",
  "Reality is just an option once the psy kicks in.",
  "Cosmic vibrations and psychedelic rhythm.",
  "Decoding the universe through heavy drops.",
  "Deep in the sonic labyrinth.",

  // 5. Euphoric & Melodic Trance
  "High on melodic progression.",
  "A chord progression that heals the soul.",
  "Floating through euphoric atmospheres.",
  "Melodies that make time stand still.",
  "Every build-up is a promise; every drop is a release.",
  "Tears on the dancefloor, joy in the heart.",
  "Goosebumps triggered by sound alone.",
  "Floating higher than the clouds on a breakdown.",
  "Pure, unfiltered, emotional elevation.",
  "When music transcends words, trance begins.",

  // 6. Tech-Trance & Dark/Heavy Beats
  "Industrial energy, raw power.",
  "Dark synths for bright minds.",
  "Driven by heavy sub-bass and precision.",
  "Techno-infused trance to reset the system.",
  "Strobe lights and industrial soul.",
  "Deep in the subterranean sound.",
  "High tempo, zero friction.",
  "No fluff, just pure electronic pressure.",
  "Dark rooms, bright basslines.",
  "Pulsing through the shadows.",

  // 7. Night Drive & Late-Night Listening
  "3 AM, empty roads, and heavy synths.",
  "Driving through the city in a trance-induced bubble.",
  "Neon lights reflecting off late-night basslines.",
  "Midnight soundscapes for long highway runs.",
  "The soundtrack to an empty city.",
  "Cruising at the speed of sound.",
  "Late-night frequencies for overthinking minds.",
  "Headlights and heavy bass.",
  "Where the road ends, the breakdown begins.",
  "Nighttime is when the trance hits different.",

  // 8. Soulful & Spiritual Connection
  "Transcending the physical through sound.",
  "In sync with the universe’s pulse.",
  "Music is the bridge between body and soul.",
  "Meditating in the middle of a roaring crowd.",
  "Finding inner stillness inside loud frequencies.",
  "Soundwaves washing over the spirit.",
  "Elevating mind, body, and frequency.",
  "The beat carries what words cannot express.",
  "Spiritual alignment at 138 BPM.",
  "Harmonizing with the digital cosmos.",

  // 9. Witty, Clever & Attitude Captions
  "I don't need small talk, I need a 10-minute trance track.",
  "My life has a 138 BPM soundtrack.",
  "Keep your drama, I’ll take the drop.",
  "Trance isn't just music; it's a lifestyle choice.",
  "Speak fluent synthesizer.",
  "Less talk, more buildup.",
  "Professionally distracted by sound design.",
  "Sorry I can’t hear you over this breakdown.",
  "My therapist is an equalizer.",
  "Running on caffeine, synths, and bass.",

  // 10. Lyrics-Style & Poetic Vibes
  "Lost in the harmony of the night.",
  "Dancing on the edge of a soundwave.",
  "When the lights dim, the melody shines.",
  "An endless loop of pure energy.",
  "Caught in the current of electronic sound.",
  "Time fades, frequencies remain.",
  "Where sound becomes light and light becomes motion.",
  "Floating on waves created by machines and heartbeats.",
  "A journey without moving a single step.",
  "Until the last beat fades, we stay elevated."
];

export default function CaptionRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      triggerNext();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  function triggerNext() {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % captions.length);
      setFade(true);
    }, 300); // 300ms transition time
  }

  return (
    <div className="flex items-center justify-center py-1 px-4 select-none animate-[fade-in_0.6s_ease-out]">
      <div
        className={`flex items-center justify-center transition-all duration-300 ${
          fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Caption Text */}
        <span
          className="caption-glow text-center text-[13.5px] sm:text-[15px]"
          data-text={captions[index]}
        >
          {captions[index]}
        </span>

        {/* Static Curved Arrow Icon */}
        <svg
          className="w-3.5 h-3.5 ml-2.5 opacity-80 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          viewBox="0 0 24 24"
          style={{
            color: "#00f0ff", // Neon cyan accent color matching the title glow gradient!
            filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.7))",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h10a8 8 0 018 8v2M13 5l-5 5 5 5"
          />
        </svg>
      </div>
    </div>
  );
}
