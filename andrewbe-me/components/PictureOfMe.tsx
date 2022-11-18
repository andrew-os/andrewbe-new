import Image from 'next/image'

export default function PictureOfMe() {
  return (
    <div className="md:col-start-6 md:col-span-7  relative">
      <div className="flex justify-end">
        <Image src="/../public/orange-me-final--crop.png" alt="me" width="520" height="566" />
      </div>
    </div>
  )
}