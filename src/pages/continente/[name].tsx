import { NextPage } from "next"
import { useRouter } from "next/router"
import { useContext } from "react"
import { CitySection } from "../../components/CitiySection"
import { ContinentBanner } from "../../components/ContinentBanner"
import { ContinentInfo } from "../../components/ContinentInfo"
import { Header } from "../../components/Header"
import { ContinentContext } from "../../context/ContinentContext"

const Continent: NextPage = () => {
  const { selectedContinent } = useContext(ContinentContext)

  if (!selectedContinent) {
    const router = useRouter()
    router.push('/')
  }

  return (
    <>
      <Header hasArrow />
      <ContinentBanner continent={selectedContinent} />
      <ContinentInfo continent={selectedContinent} />
      <CitySection countries={selectedContinent.countries}/>
    </>
  )
}

export default Continent