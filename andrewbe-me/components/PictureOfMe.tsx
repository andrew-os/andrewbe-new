import Image from 'next/image'
import me from '../public/orange-me-final--crop.png'

export default function PictureOfMe() {
  return (
    <div className="md:col-start-6 md:col-span-7  relative">
      <div className="flex justify-end">
        <Image src={me} alt="me" width="520" height="566" />
      </div>
    </div>
  )
}
