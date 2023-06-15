import QuickLinkCard from '../../components/homeComponents/quickLinkCard';
import { cards } from '../../utilities/quickLinksData';

const QuickLinksLayout = () => {
  return (
    <div className="mx-auto py-8 px-6 bg-secondary">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <QuickLinkCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default QuickLinksLayout