import Image from 'next/image'

export default function PictureOfMe() {
  return (
    <div className="col-start-7 col-end-12 relative">
      <div className="flex justify-end">
        <Image src="/orange-my-site--final.png" alt="me" width="520" height="566" />
      </div>
    </div>
  )
}