import HeroSection from '@/components/sections/HeroSection'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import PopularQuestions from '@/components/sections/PopularQuestions'
import ResourceCategories from '@/components/sections/ResourceCategories'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <PopularQuestions />
      <ResourceCategories />
    </>
  )
}