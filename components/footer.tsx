import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/60-kosmos-elegant-logo.jpg"
              alt="60 on Kosmos Guesthouse"
              width={200}
              height={55}
              className="block mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-gray-400 mb-4">
              Comfortable, secure ensuite rooms in Bellville South Cape Town. Perfect for contractors, students, and
              families visiting UWC.
            </p>
            <div className="text-gray-400">
              <p>60 Kosmos Street, Bellville South</p>
              <p className="font-semibold text-white mt-2">074 524 5703</p>
              <p>info@60onkosmos.co.za</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Location Benefits</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• 5km from UWC Campus</li>
              <li>• Close to Tygerberg Hospital</li>
              <li>• Easy N1 highway access</li>
              <li>• Safe Bellville South neighborhood</li>
              <li>• Near shopping centers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Perfect For</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Contractors working in Cape Town</li>
              <li>• UWC students and families</li>
              <li>• Business travelers</li>
              <li>• Medical professionals</li>
              <li>• Budget-conscious travelers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 60 on Kosmos – Ensuite Guesthouse Bellville South Cape Town</p>
        </div>
      </div>
    </footer>
  )
}
