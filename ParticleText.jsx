import { useEffect, useRef } from 'react'

export default function ParticleText() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current, ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return undefined
    let frame, particles = [], width = 0, height = 0
    const pointer = { x: -9999, y: -9999 }
    const resize = () => { const rect = canvas.getBoundingClientRect(); width = rect.width; height = rect.height; const dpr = Math.min(devicePixelRatio || 1, 2); canvas.width = width * dpr; canvas.height = height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); particles = Array.from({ length: Math.min(480, Math.floor(width * height / 2800)) }, (_, i) => ({ x: Math.random() * width, y: Math.random() * height, size: Math.random() * 1.6 + .4, speed: Math.random() * .22 + .03, phase: Math.random() * 6.28, warm: i % 11 === 0 })) }
    const draw = time => { ctx.clearRect(0, 0, width, height); particles.forEach(p => { p.y -= p.speed; if (p.y < -8) p.y = height + 8; const dx = p.x - pointer.x, dy = p.y - pointer.y, d = Math.hypot(dx, dy), force = d < 150 ? (1 - d / 150) * 25 : 0, x = p.x + Math.sin(time * .0004 + p.phase) * 12 + (d ? dx / d * force : 0), y = p.y + (d ? dy / d * force : 0); ctx.fillStyle = p.warm ? 'rgba(255,138,103,.74)' : 'rgba(202,235,248,.54)'; ctx.fillRect(x, y, p.size, p.size) }); frame = requestAnimationFrame(draw) }
    const move = event => { const rect = canvas.getBoundingClientRect(); pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top }
    resize(); window.addEventListener('resize', resize); canvas.addEventListener('pointermove', move); frame = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); canvas.removeEventListener('pointermove', move) }
  }, [])
  return <div className="particle-text" aria-hidden="true"><canvas ref={canvasRef} /></div>
}
