import { formatRand, groupOffer, nineGuestNote, perPersonRates, rooms, stayTerms, wholeHouse } from "@/lib/site-facts"

// Room rate table built straight from lib/site-facts.ts so the figures on every
// page always match the confirmed room rates. Room prices lead; the per-person
// figure is a small, qualified example underneath.
export function PerPersonRatesTable() {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm sm:text-base">
          <caption className="sr-only">60 on Kosmos room rates per room per night, in rand</caption>
          <thead className="bg-gray-100 text-gray-900">
            <tr>
              <th scope="col" className="p-3">Room (per room per night)</th>
              <th scope="col" className="p-3">Sleeps</th>
              <th scope="col" className="p-3">1–6 nights</th>
              <th scope="col" className="p-3">7–27 nights</th>
              <th scope="col" className="p-3">{stayTerms.monthlyRateMinNights}+ nights</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, i) => {
              const pp = perPersonRates[i]
              const note = `if ${pp.sleeps} adults share`
              return (
                <tr key={room.name} className="border-t">
                  <th scope="row" className="p-3 font-semibold text-gray-900">
                    {room.name}
                    <span className="block text-xs font-normal text-gray-500">{room.layout}</span>
                  </th>
                  <td className="p-3">
                    {pp.sleeps} adults
                    {room.layout === "One double bed" && (
                      <span className="block text-xs text-gray-500">sharing the double bed</span>
                    )}
                  </td>
                  <td className="p-3 font-semibold">
                    {formatRand(room.price)}
                    <span className="block text-xs font-normal text-gray-500">
                      {formatRand(pp.nightly)} pp {note}
                    </span>
                  </td>
                  <td className="p-3 font-semibold">
                    {formatRand(room.weeklyPrice)}
                    <span className="block text-xs font-normal text-gray-500">
                      {formatRand(pp.weekly)} pp {note}
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-sage-700">
                    {formatRand(room.monthlyPrice)}
                    <span className="block text-xs font-normal text-gray-500">
                      {formatRand(pp.monthly)} pp {note}
                    </span>
                  </td>
                </tr>
              )
            })}
            <tr className="border-t bg-sage-50">
              <th scope="row" className="p-3 font-semibold text-gray-900">
                All four rooms
              </th>
              <td className="p-3">
                Up to 9 adults
                <span className="block text-xs text-gray-500">2 share the double bed</span>
              </td>
              <td className="p-3 font-semibold">
                {formatRand(wholeHouse.nightly)}
                <span className="block text-xs font-normal text-gray-500">
                  {formatRand(wholeHouse.groupNightly)} for {groupOffer.minNights}–6 nights with the{" "}
                  {groupOffer.discountPercent}% group discount
                </span>
              </td>
              <td className="p-3 font-semibold">{formatRand(wholeHouse.weekly)}</td>
              <td className="p-3 font-semibold text-sage-700">{formatRand(wholeHouse.monthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600">
        All rates are per room per night and are charged for the rooms reserved and the nights stayed. There is one
        room of each type. The length of the stay sets the rate: 1–6 nights, 7–27 nights, or{" "}
        {stayTerms.monthlyRateMinNights}+ nights. “pp” figures are examples only, when every bed in the room is used.
        The {groupOffer.discountPercent}% group discount applies only when all four rooms are booked direct for{" "}
        {groupOffer.minNights}–6 nights; it doesn’t combine with the 7–27 or {stayTerms.monthlyRateMinNights}+ night
        rates. {nineGuestNote} Payment by EFT; company invoices on request. All rates are subject to availability.
      </p>
    </div>
  )
}
