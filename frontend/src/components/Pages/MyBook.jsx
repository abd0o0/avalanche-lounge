import HTMLFlipBook from 'react-pageflip';
import Page from './Pages.jsx';
import Cover from './MenuPages.jsx/Cover/Cover.jsx';
import coverImg from '../../assets/Menu_assets/Iced Coffee.png';
import { useState, useEffect } from 'react';
import ThankPage from './MenuPages.jsx/ThankPage/ThankPage.jsx';
import CategoryPage from './MenuPages.jsx/Categories/CategoryPage.jsx';
import { categories } from './MenuPages.jsx/Categories/categoriesData.js';

const BgTextureStyle = {};

function MyBook() {
  const [dimensions, setDimensions] = useState({ width: 600, height: 700 });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setDimensions({ width: 300, height: 350 });
      } else {
        setDimensions({ width: 600, height: 650 });
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={BgTextureStyle}
      className="mt-2 mb-20 overflow-hidden w-full h-full flex justify-center items-center bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="w-full max-w-4xl mx-auto flex justify-center items-center">
        <HTMLFlipBook 
          width={dimensions.width} 
          height={dimensions.height} 
          size="stretch"
          minWidth={300}
          maxWidth={600}
          minHeight={350}
          maxHeight={650}
          showCover={true}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          className="mx-auto"
        >
          <Page number={1}>
          <Cover coverImg={coverImg} />
        </Page>

        {categories.filter(Boolean).map((category, index) => (
          <Page number={index + 2} key={category.key}>
            <CategoryPage category={category} />
          </Page>
        ))}

        <Page number={categories.length + 2}>
          <ThankPage />
        </Page>
        <Page number={categories.length + 3}>
          <Cover coverImg={coverImg} />
        </Page>
      </HTMLFlipBook>
      </div>
    </div>
  );
}

export default MyBook;
