import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

export default function FoldText({ text, duration = .7, stagger = .055, className = '' }) {
  const rootRef = useRef(null)
  const characters = useMemo(() => Array.from(text), [text])
  useEffect(() => {
    const root = rootRef.current
    const pieces = root ? root.querySelectorAll('.fold-text-piece') : []
    if (!pieces.length) return undefined
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const animation = gsap.fromTo(pieces,
      { opacity: 0, rotateX: reduced ? 0 : -92, '--fold-crease': reduced ? 0 : .88, transformOrigin: '50% 0%' },
      { opacity: 1, rotateX: 0, '--fold-crease': 0, duration: reduced ? .2 : duration, stagger: reduced ? .01 : stagger, ease: 'power3.out', force3D: true }
    )
    return () => animation.kill()
  }, [duration, stagger, text])
  return <em ref={rootRef} className={`fold-text ${className}`} aria-label={text}>{characters.map((character, index) => <span className="fold-text-segment" key={`${character}-${index}`}><span className="fold-text-piece">{character}</span></span>)}</em>
}
