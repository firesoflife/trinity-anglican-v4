import QuickLinkCard from '../../components/homeComponents/quickLinkCard';

const cards = [
  {
    imageSrc: 'https://source.unsplash.com/random',
    header: 'Card Header 1',
    subheader: 'Card Subheader 1',
    content:
      'This is the main content of the card 1. You can write a description or any information you want to display here.',
    cta: 'Click me',
  },
  {
    imageSrc: 'https://source.unsplash.com/random',
    header: 'Card Header 2',
    subheader: 'Card Subheader 2',
    content:
      'This is the main content of the card 2. You can write a description or any information you want to display here.',
    cta: 'Click me',
  },
  // Add more cards as needed
];

const QuickLinksLayout = () => {
  return (
    <div className="container mx-auto py-8 bg-secondary">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <QuickLinkCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default QuickLinksLayout