import React, { useState, useEffect, useRef } from "react";
import { FadeIn } from "../common/FadeIn";
import { Play, Pause, SkipForward, Volume2, VolumeX, Disc3, Music2, ExternalLink } from "lucide-react";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  curator: "Kendrick Lamar" | "Travis Scott" | "Drake";
  bpm: number;
  description: string;
  baseFreq: number;
  spotifyUrl: string;
}

export const AtharvaMusicSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Kendrick Lamar" | "Travis Scott" | "Drake">("All");
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);

  // Web Audio Context & Synthesizer references
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorNodesRef = useRef<OscillatorNode[]>([]);
  const intervalRef = useRef<number | null>(null);

  const playlist: Track[] = [
    // Kendrick Lamar
    {
      id: "kendrick-love",
      title: "LOVE. (feat. Zacari)",
      artist: "Kendrick Lamar",
      album: "DAMN.",
      curator: "Kendrick Lamar",
      bpm: 65,
      description: "Atmospheric, smooth vocal chops and warm emotional chords that provide uninterrupted late-night coding tranquility.",
      baseFreq: 174.61, // F3
      spotifyUrl: "https://open.spotify.com/search/Kendrick%20Lamar%20LOVE.",
    },
    {
      id: "kendrick-all-the-stars",
      title: "All The Stars",
      artist: "Kendrick Lamar, SZA",
      album: "Black Panther: The Album",
      curator: "Kendrick Lamar",
      bpm: 97,
      description: "Grand cinematic synth strings with driving percussion that sparks algorithmic breakthroughs.",
      baseFreq: 233.08, // A#3
      spotifyUrl: "https://open.spotify.com/search/Kendrick%20Lamar%20All%20The%20Stars",
    },
    {
      id: "kendrick-humble",
      title: "HUMBLE.",
      artist: "Kendrick Lamar",
      album: "DAMN.",
      curator: "Kendrick Lamar",
      bpm: 150,
      description: "Aggressive, high-energy piano stab rhythm for rapid prototyping and sprint pushes.",
      baseFreq: 146.83, // D3
      spotifyUrl: "https://open.spotify.com/search/Kendrick%20Lamar%20HUMBLE.",
    },

    // Travis Scott
    {
      id: "travis-sicko-mode",
      title: "SICKO MODE",
      artist: "Travis Scott, Drake",
      album: "ASTROWORLD",
      curator: "Travis Scott",
      bpm: 155,
      description: "Legendary beat switches, haunting ambient synthesizers, and seismic 808 sub-bass.",
      baseFreq: 123.47, // B2
      spotifyUrl: "https://open.spotify.com/search/Travis%20Scott%20SICKO%20MODE",
    },
    {
      id: "travis-highest-in-the-room",
      title: "HIGHEST IN THE ROOM",
      artist: "Travis Scott",
      album: "JACKBOYS / Single",
      curator: "Travis Scott",
      bpm: 76,
      description: "Spacious acoustic guitar riffs blended into soaring psychedelic synth pads and floating trap grooves.",
      baseFreq: 196.0, // G3
      spotifyUrl: "https://open.spotify.com/search/Travis%20Scott%20HIGHEST%20IN%20THE%20ROOM",
    },
    {
      id: "travis-fein",
      title: "FE!N (feat. Playboi Carti)",
      artist: "Travis Scott",
      album: "UTOPIA",
      curator: "Travis Scott",
      bpm: 148,
      description: "Relentless synth pulses and hypnotic repetition designed to lock you into deep coding flow states.",
      baseFreq: 164.81, // E3
      spotifyUrl: "https://open.spotify.com/search/Travis%20Scott%20FEIN",
    },
    {
      id: "travis-telekinesis",
      title: "TELEKINESIS (feat. SZA & Future)",
      artist: "Travis Scott",
      album: "UTOPIA",
      curator: "Travis Scott",
      bpm: 83,
      description: "Ethereal synth arrangement with celestial choir voicings and reverberant bass drops.",
      baseFreq: 220.0, // A3
      spotifyUrl: "https://open.spotify.com/search/Travis%20Scott%20TELEKINESIS",
    },

    // Drake
    {
      id: "drake-passionfruit",
      title: "Passionfruit",
      artist: "Drake",
      album: "More Life",
      curator: "Drake",
      bpm: 112,
      description: "Silky tropical dancehall groove and nocturnal Rhodes piano chords for smooth, steady terminal sessions.",
      baseFreq: 155.56, // D#3
      spotifyUrl: "https://open.spotify.com/search/Drake%20Passionfruit",
    },
    {
      id: "drake-rich-baby-daddy",
      title: "Rich Baby Daddy (feat. Sexyy Red & SZA)",
      artist: "Drake",
      album: "For All The Dogs",
      curator: "Drake",
      bpm: 146,
      description: "Upbeat club-infused bounce with smooth SZA harmonies that keeps energy levels peaked.",
      baseFreq: 130.81, // C3
      spotifyUrl: "https://open.spotify.com/search/Drake%20Rich%20Baby%20Daddy",
    },
    {
      id: "drake-fps",
      title: "First Person Shooter (feat. J. Cole)",
      artist: "Drake, J. Cole",
      album: "For All The Dogs",
      curator: "Drake",
      bpm: 164,
      description: "Triumphant horn samples and fierce lyrical flow for crushing complex algorithms and code refactors.",
      baseFreq: 116.54, // A#2
      spotifyUrl: "https://open.spotify.com/search/Drake%20First%20Person%20Shooter",
    },
  ];

  const filteredPlaylist =
    selectedFilter === "All"
      ? playlist
      : playlist.filter((track) => track.curator === selectedFilter);

  const currentTrack = playlist[currentTrackIndex] || playlist[0];

  // Stop currently active audio oscillators
  const stopAudio = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    oscillatorNodesRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    oscillatorNodesRef.current = [];
  };

  // Play generative ambient synth chords styled after the current track
  const startAudio = () => {
    stopAudio();

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.16, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Analog low-pass filter
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(850, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);
      filter.connect(masterGain);

      // Chords ratios (Minor 7th & 9th trap/R&B voicing)
      const chordRatios = [1, 1.2, 1.5, 1.8];

      const playChord = (multiplier = 1) => {
        oscillatorNodesRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {}
        });
        oscillatorNodesRef.current = [];

        chordRatios.forEach((ratio, i) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          osc.type = i % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(currentTrack.baseFreq * ratio * multiplier, ctx.currentTime);

          // Attack and gentle decay
          oscGain.gain.setValueAtTime(0.01, ctx.currentTime);
          oscGain.gain.exponentialRampToValueAtTime(0.24 / chordRatios.length, ctx.currentTime + 1.2);

          osc.connect(oscGain);
          oscGain.connect(filter);
          osc.start();
          oscillatorNodesRef.current.push(osc);
        });
      };

      playChord();

      let step = 0;
      const progression = [1, 1.125, 0.89, 1.33];
      intervalRef.current = window.setInterval(() => {
        step = (step + 1) % progression.length;
        playChord(progression[step]);
      }, 4000);

    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      startAudio();
      setIsPlaying(true);
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIdx);
    if (isPlaying) {
      setTimeout(() => {
        startAudio();
      }, 100);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        !isMuted ? 0 : volume * 0.16,
        audioCtxRef.current.currentTime
      );
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (gainNodeRef.current && audioCtxRef.current && !isMuted) {
      gainNodeRef.current.gain.setValueAtTime(val * 0.16, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startAudio();
    }
  }, [currentTrackIndex]);

  return (
    <section id="music" className="py-24 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] font-kanit relative z-10 border-t border-[#D7E2EA]/15">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <FadeIn delay={0.1} y={20}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light block mb-2">
              Soundscapes &bull; Heavy Rotation
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
            >
              Coding Music &amp; Vibes
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 font-light mt-4 max-w-xl mx-auto">
              Curated playlists featuring Kendrick Lamar, Travis Scott, and Drake — paired with an interactive ambient synthesizer for coding focus.
            </p>
          </FadeIn>
        </div>

        {/* Curator Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(["All", "Kendrick Lamar", "Travis Scott", "Drake"] as const).map((curator) => (
            <button
              key={curator}
              onClick={() => setSelectedFilter(curator)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                selectedFilter === curator
                  ? "bg-white text-black shadow-lg shadow-white/20 scale-105"
                  : "bg-white/5 border border-white/10 text-[#D7E2EA]/70 hover:text-white hover:border-white/30"
              }`}
            >
              {curator === "All" ? "All Playlists" : curator}
            </button>
          ))}
        </div>

        {/* Music Player Console Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Player Unit */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={30} className="h-full">
              <div className="h-full rounded-[40px] border-2 border-[#D7E2EA] bg-[#121212] p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                {/* Vinyl Disc Visualizer Graphic */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-white/10">
                  <div className="relative">
                    <div
                      className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#1a1a1a] via-[#2d2d2d] to-[#0f0f0f] border-4 border-[#333] shadow-2xl flex items-center justify-center ${
                        isPlaying ? "animate-spin" : ""
                      }`}
                      style={{ animationDuration: "8s" }}
                    >
                      {/* Vinyl Grooves */}
                      <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B600A8] to-[#BE4C00] flex items-center justify-center text-white">
                            <Disc3 className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center sm:text-left flex-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#BBCCD7]">
                        {currentTrack.album}
                      </span>
                      <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-white/10 text-[#D7E2EA]">
                        {currentTrack.curator}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                      {currentTrack.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mt-1">
                      {currentTrack.artist} &bull; {currentTrack.bpm} BPM
                    </p>

                    {/* Equalizer Waveform Animation */}
                    <div className="flex items-end gap-1.5 h-8 mt-4 justify-center sm:justify-start">
                      {[14, 26, 18, 32, 16, 28, 22, 30, 18, 26, 12, 24].map((height, i) => (
                        <div
                          key={i}
                          className="w-1.5 rounded-full bg-gradient-to-t from-[#B600A8] to-[#BBCCD7] transition-all duration-300"
                          style={{
                            height: isPlaying ? `${Math.max(6, (height * (i % 3 + 1)) % 32)}px` : "4px",
                            opacity: isPlaying ? 0.95 : 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Track Description */}
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed my-6">
                  {currentTrack.description}
                </p>

                {/* Audio Controls Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 rounded-full bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#BE4C00] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/30"
                      aria-label={isPlaying ? "Pause audio" : "Play audio"}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                    </button>

                    {/* Skip Track */}
                    <button
                      onClick={handleNextTrack}
                      className="p-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 text-white transition-all cursor-pointer"
                      aria-label="Next track"
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>

                    <a
                      href={currentTrack.spotifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white flex items-center gap-1.5 no-underline ml-2"
                    >
                      <span>Open in Spotify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={toggleMute}
                      className="text-[#D7E2EA]/60 hover:text-white p-1"
                      aria-label="Toggle mute"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 accent-[#BBCCD7] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Playlist Selector */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.3} y={30} className="h-full">
              <div className="h-full rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light flex items-center gap-2">
                      <Music2 className="w-4 h-4 text-[#BBCCD7]" />
                      Track Catalog
                    </span>
                    <span className="text-[11px] font-mono text-white/40">{filteredPlaylist.length} Tracks</span>
                  </div>

                  <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                    {filteredPlaylist.map((track) => {
                      const isCurrent = playlist[currentTrackIndex]?.id === track.id;
                      const globalIdx = playlist.findIndex((t) => t.id === track.id);
                      return (
                        <div
                          key={track.id}
                          onClick={() => {
                            setCurrentTrackIndex(globalIdx >= 0 ? globalIdx : 0);
                            if (!isPlaying) setIsPlaying(true);
                          }}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            isCurrent
                              ? "bg-white/15 border-[#D7E2EA]"
                              : "bg-black/40 border-white/5 hover:border-white/20"
                          }`}
                        >
                          <div>
                            <h4 className="text-sm font-bold uppercase text-white tracking-wide">
                              {track.title}
                            </h4>
                            <span className="text-[11px] text-[#D7E2EA]/60 font-light block">
                              {track.artist} &bull; {track.album}
                            </span>
                          </div>

                          <span className="text-xs font-mono text-[#BBCCD7]">
                            {isCurrent && isPlaying ? "PLAYING" : "SELECT"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Curator Badges Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#D7E2EA]/60 flex items-center justify-between">
                  <span>Artists: Kendrick, Travis, Drake</span>
                  <span className="font-mono text-[#BBCCD7]">Web Audio API</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
