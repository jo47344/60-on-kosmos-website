import { perPersonRates, rooms, wholeHouse, groupOffer, stayTerms, capacity, nineGuestNote } from "@/lib/site-facts"

const r = (n: number) => `R${n.toLocaleString("en-US")}`

// Rate table built straight from lib/site-facts.ts so the figures on every
// page always match the confirmed room rates.
export function PerPersonRatesTable() {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm sm:text-base">
          <caption className="sr-only">60 on Kosmos room rates per room and per person, in rand</caption>
          <thead className="bg-gray-100 text-gray-900">
            <tr>
              <th scope="col" className="p-3">Room</th>
              <th scope="col" className="p-3">Sleeps</th>
              <th scope="col" className="p-3">1–6 nights</th>
              <th scope="col" className="p-3">7–27 nights</th>
              <th scope="col" className="p-3">{stayTerms.monthlyRateMinNights}+ nights</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, i) => {
              const pp = perPersonRates[i]
              return (
                <tr key={room.name} className="border-t">
                  <th scope="row" className="p-3 font-semibold text-gray-900">
                    {room.name}
                    <span className="block text-xs font-normal text-gray-500">
                      {room.layout}
                      {room.layout === "One double bed" ? " (pp assumes two adults sharing the bed)" : ""}
                    </span>
                  </th>
                  <td className="p-3">{pp.sleeps}</td>
                  <td className="p-3">
                    {r(room.price)} <span className="block text-xs text-gray-500">{r(pp.nightly)} pp</span>
                  </td>
                  <td className="p-3">
                    {r(room.weeklyPrice)} <span className="block text-xs text-gray-500">{r(pp.weekly)} pp</span>
                  </td>
                  <td className="p-3 font-semibold text-sage-700">
                    {r(room.monthlyPrice)} <span className="block text-xs text-gray-500">{r(pp.monthly)} pp</span>
                  </td>
                </tr>
              )
            })}
            <tr className="border-t bg-sage-50">
              <th scope="row" className="p-3 font-semibold text-gray-900">
                Whole house (all 4 rooms)
              </th>
              <td className="p-3">
                {capacity.maxGuests}
                <span className="block text-xs text-gray-500">2 share the double bed</span>
              </td>
              <td className="p-3">
                {r(wholeHouse.nightly)}
                <span className="block text-xs text-gray-500">
                  {r(wholeHouse.groupNightly)} with {groupOffer.discountPercent}% group discount
                </span>
              </td>
              <td className="p-3">
                {r(wholeHouse.weekly)}{" "}
                <span className="block text-xs text-gray-500">
                  {r(Math.round(wholeHouse.weekly / capacity.maxGuests))} pp
                </span>
              </td>
              <td className="p-3 font-semibold text-sage-700">
                {r(wholeHouse.monthly)}{" "}
                <span className="block text-xs text-gray-500">
                  {r(Math.round(wholeHouse.monthly / capacity.maxGuests))} pp
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600">
        Rates are per room per night; “pp” is per person when every bed in the room is used. The{" "}
        {groupOffer.discountPercent}% group discount applies when all four rooms are booked direct for{" "}
        {groupOffer.minNights}+ nights and doesn’t combine with the 7+ or {stayTerms.monthlyRateMinNights}+ night rates.
        Payment by EFT; company invoices on request. {nineGuestNote} All rates are subject to availability.
      </p>
    </div>
  )
}
