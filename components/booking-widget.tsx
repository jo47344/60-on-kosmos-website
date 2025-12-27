"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users } from "lucide-react"

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [roomType, setRoomType] = useState("")
  const [guests, setGuests] = useState("1")

  const handleGetQuote = () => {
    const message = encodeURIComponent(
      `Hi, I'd like to get a quote for:\n- Check-in: ${checkIn || "TBD"}\n- Check-out: ${checkOut || "TBD"}\n- Room: ${roomType || "Any"}\n- Guests: ${guests}`,
    )
    window.open(`https://wa.me/27745245703?text=${message}`, "_blank")
  }

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl">
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="checkIn" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Check-in
            </Label>
            <Input id="checkIn" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkOut" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Check-out
            </Label>
            <Input id="checkOut" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="roomType">Room Type</Label>
            <Select value={roomType} onValueChange={setRoomType}>
              <SelectTrigger id="roomType">
                <SelectValue placeholder="Select room" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard-twin">Standard Twin</SelectItem>
                <SelectItem value="double">Double Room</SelectItem>
                <SelectItem value="deluxe-twin">Deluxe Twin</SelectItem>
                <SelectItem value="triple">Triple Room</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Guests
            </Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger id="guests">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          <Button onClick={handleGetQuote} size="lg" className="w-full md:w-auto bg-[#16a34a] hover:bg-[#15803d]">
            Get Quote via WhatsApp
          </Button>
          <div className="text-center">
            <p className="text-sm text-gray-600">Starting from R530/night</p>
            <p className="text-xs text-gray-500 mt-1">Final rates depend on duration and room type</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
