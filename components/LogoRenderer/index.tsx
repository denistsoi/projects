import { ContentContainer } from "@components/ContentContainer";
import Image from "next/image";

export const LogoRenderer = ({ logos }) => {
  console.log(logos)

  return (
    <ContentContainer>
      <div className="flex flex-wrap">
        {logos.dark.map(logo => {
          return (
            <Image 
              className="border-2 bg-black border-black m-1 flex-1"
              alt=""
              src={"/logos/" + logo} 
              height={200}
              width={200}
              loading="eager"
              priority
            />
          )
        })
        }
      </div>
      <div className="flex flex-wrap">
        {logos.light.map(logo => {
          return (
            <Image 
              className="border-2 bg-white border-black m-1 flex-1"
              alt=""
              src={"/logos/" + logo} 
              height={200}
              width={200}
              loading="eager"
              priority
            />
          )
        })
        }
      </div>

      <div>
        <p>Please reach out to us if you require high-res versions of these assets. Made with ❤️ GF. </p>
      </div>
    </ContentContainer>
  )
}