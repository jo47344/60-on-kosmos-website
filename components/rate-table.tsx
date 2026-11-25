import { rooms } from "@/lib/site-facts"

export function RateTable() {
  return <div className="overflow-x-auto"><table className="w-full text-sm">
    <caption className="text-left py-3">Direct rates per room, per night. Sharing rates unless stated otherwise.</caption>
    <thead><tr>{["Room", "1–6 nights", "7–27 nights", "28+ nights"].map(label => <th key={label} className="text-left p-3 border-b">{label}</th>)}</tr></thead>
    <tbody>{rooms.map(room => <tr key={room.name}><th className="text-left p-3 border-b">{room.name}<span className="block font-normal">{room.layout}</span></th><td className="p-3 border-b">R{room.price}</td><td className="p-3 border-b">R{room.weeklyPrice}</td><td className="p-3 border-b">R{room.monthlyPrice}</td></tr>)}</tbody>
  </table><p className="text-sm mt-4">Green Double for one adult: R500/night for 7–27 nights; R400/night from 28 nights. Four adults sharing both Twins: R500 per Twin/night for 7–27 nights; R460 per Twin/night from 28 nights. Triple Room minimum applies even with fewer than three adults. Use the calculator for your full stay total.</p></div>
}
