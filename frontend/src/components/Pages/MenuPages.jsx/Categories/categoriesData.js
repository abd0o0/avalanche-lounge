import icedCoffeeImg from '../../../../assets/Menu_assets/Iced Coffee.png';
import hotDrinksImg from '../../../../assets/Menu_assets/Hot Drinks.png';
import freshJuicesImg from '../../../../assets/Menu_assets/Fresh Juices.png';
import summerDrinksImg from '../../../../assets/Menu_assets/Summer Drinks.png';
import milkshakesImg from '../../../../assets/Menu_assets/Milkshakes.png';
import specialCocktailsImg from '../../../../assets/Menu_assets/Special Cocktails.png';
import alcoholicDrinksImg from '../../../../assets/Menu_assets/Alcoholic Drinks.png';
import fruitSaladsImg from '../../../../assets/Menu_assets/Fruit Salads.png';
import iceCreamImg from '../../../../assets/Menu_assets/Ice Cream.png';
import kaiserCocktailImg from '../../../../assets/Menu_assets/Kaiser Cocktail.png';
import shishaImg from '../../../../assets/Menu_assets/Shisha.png';

export const categories = [
  {
    key: 'eiskaffee',
    title: { en: 'Iced Coffee', de: 'Eiskaffee', ar: 'القهوة الباردة' },
    description: {
      en: 'Cool down with our refreshing selection of iced coffee classics, crafted with premium espresso and smooth cream for the perfect pick-me-up.',
      de: 'Geniesse unsere erfrischenden Eiskaffee-Klassiker mit Premium-Espresso und cremiger Textur.',
      ar: 'انتعش مع تشكيلة القهوة الباردة المحضرة بإسبريسو فاخر ولمسة كريمية.'
    },
    image: icedCoffeeImg,
    items: [
      { name: { en: 'Frappe', de: 'Frappe', ar: 'فرابيه' }, price: '4,50 EUR', tags: ['bestSeller'] },
      { name: { en: 'Fredo Cappuccino', de: 'Fredo Cappuccino', ar: 'فريدو كابتشينو' }, price: '4,50 EUR', tags: ['signature'] },
      { name: { en: 'Frappuccino', de: 'Frappuccino', ar: 'فرابتشينو' }, price: '4,50 EUR', tags: ['bestSeller'] },
      { name: { en: 'Eiscafe-Karamell', de: 'Eiscafe-Karamell', ar: 'ايس كافيه كراميل' }, price: '4,50 EUR', tags: ['signature'] },
      { name: { en: 'Eiscafe-Schokolade', de: 'Eiscafe-Schokolade', ar: 'ايس كافيه شوكولاتة' }, price: '4,50 EUR' },
    ],
  },
  {
    key: 'heisse-getranke',
    title: { en: 'Hot Drinks', de: 'Heiße Getränke', ar: 'مشروبات ساخنة' },
    description: {
      en: 'Warm your soul with our aromatic hot beverages, from rich espresso creations to traditional Arabic coffee and fragrant Moroccan tea.',
      de: 'Waerme dich mit aromatischen Heissgetraenken von Espresso bis arabischem Kaffee und marokkanischem Tee.',
      ar: 'دفئ يومك بمشروبات ساخنة عطرية من الإسبريسو حتى القهوة العربية والشاي المغربي.'
    },
    image: hotDrinksImg,
    items: [
      { name: { en: 'Espresso', de: 'Espresso', ar: 'إسبريسو' }, price: '2,50 EUR' },
      { name: { en: 'Double Espresso', de: 'Doppelter Espresso', ar: 'دبل إسبريسو' }, price: '4,00 EUR' },
      { name: { en: 'Cappuccino', de: 'Cappuccino', ar: 'كابتشينو' }, price: '4,00 EUR' },
      { name: { en: 'Latte Macchiato', de: 'Latte Macchiato', ar: 'لاتيه ماكياتو' }, price: '4,00 EUR' },
      { name: { en: 'Kaffee Crema', de: 'Kaffee Crema', ar: 'كافيه كريما' }, price: '3,50 EUR' },
      { name: { en: 'All Types of Tea', de: 'Alle Arten von Tee', ar: 'جميع انواع الشاي' }, price: '3,00 EUR' },
      { name: { en: 'Arabic Coffee', de: 'Arabischen Kaffee', ar: 'قهوة عربية' }, price: '3,50 EUR' },
      { name: { en: 'Moroccan Tea', de: 'Marokkanischer Tee', ar: 'شاي مغربي' }, price: '3,50 EUR' },
    ],
  },
  {
    key: 'frische-safte',
    title: { en: 'Fresh Juices', de: 'Frische Säfte', ar: 'عصائر فريش' },
    description: {
      en: "Pure, vibrant, and bursting with nature's goodness - our fresh juices are squeezed to order using only the ripest fruits for maximum flavor.",
      de: 'Frisch gepresst, fruchtig und natuerlich - zubereitet aus reifen Fruechten fuer maximalen Geschmack.',
      ar: 'عصائر طبيعية طازجة ومحضرة عند الطلب من افضل الفواكه.'
    },
    image: freshJuicesImg,
    items: [
      { name: { en: 'Mango', de: 'Mango', ar: 'مانجو' }, price: '7,00 EUR' },
      { name: { en: 'Strawberry', de: 'Erdbeere', ar: 'فراولة' }, price: '7,00 EUR' },
      { name: { en: 'Orange', de: 'Orange', ar: 'برتقال' }, price: '7,00 EUR' },
      { name: { en: 'Pineapple', de: 'Ananas', ar: 'أناناس' }, price: '7,00 EUR' },
      { name: { en: 'Maracuya', de: 'Maracuya', ar: 'ماركويا' }, price: '7,00 EUR' },
      { name: { en: 'Polo Lemon & Mint', de: 'Polo Zitrone & Minze', ar: 'بولو ليمون ونعناع' }, price: '7,00 EUR' },
      { name: { en: 'Lemonade', de: 'Limonade', ar: 'ليموناضة' }, price: '7,00 EUR' },
      { name: { en: 'Pineapple-Kiwi', de: 'Ananas-Kiwi', ar: 'كييوي وأناناس' }, price: '7,00 EUR' },
    ],
  },
  {
    key: 'sommersafte',
    title: { en: 'Summer Drinks', de: 'Sommersäfte', ar: 'عصائر صيفية' },
    description: {
      en: 'Beat the heat with our icy-cool summer specialties, featuring tropical flavors and refreshing mint for the ultimate warm-weather indulgence.',
      de: 'Kuehlende Sommerdrinks mit tropischen Aromen und frischer Minze.',
      ar: 'انتعش مع مشروبات صيفية باردة بنكهات استوائية ولمسة نعناع.'
    },
    image: summerDrinksImg,
    items: [
      { name: { en: 'Mojito', de: 'Mojito', ar: 'موخيتو' }, price: '7,00 EUR' },
      { name: { en: 'Strawberry Mojito', de: 'Erdbeer Mojito', ar: 'موخيتو فرايز' }, price: '7,00 EUR' },
      { name: { en: 'Hawaii Mojito', de: 'Hawaii Mojito', ar: 'موخيتو هاواي' }, price: '7,00 EUR' },
      { name: { en: 'Vimlo Red Bull', de: 'Vimlo Red Bull', ar: 'فيمتو ريدبول' }, price: '6,00 EUR' },
      { name: { en: 'Ipanema', de: 'Ipanema', ar: 'ايبانما' }, price: '7,00 EUR' },
    ],
  },
  {
    key: 'milchshake',
    title: { en: 'Milkshakes', de: 'Milchshakes', ar: 'ميلك شيك' },
    description: {
      en: 'Thick, creamy, and impossibly delicious - our handcrafted milkshakes are blended to perfection and topped with generous whipped cream.',
      de: 'Dick, cremig und lecker - handgemixte Milkshakes fuer echten Genuss.',
      ar: 'ميلك شيك كثيف وكريمي ولذيذ، محضر بعناية.'
    },
    image: milkshakesImg,
    items: [
      { name: { en: 'Vanilla Shake', de: 'Vanille Shake', ar: 'فانيلا شيك' }, price: '8,00 EUR' },
      { name: { en: 'Chocolate Shake', de: 'Choco Shake', ar: 'شوكو شيك' }, price: '8,00 EUR' },
      { name: { en: 'Oreo Shake', de: 'Oreo Shake', ar: 'اوريو شيك' }, price: '8,00 EUR', tags: ['bestSeller'] },
      { name: { en: 'Strawberry Shake', de: 'Erdbeer Shake', ar: 'فريز شيك' }, price: '8,00 EUR' },
    ],
  },
  {
    key: 'speziel-cocktails',
    title: { en: 'Special Cocktails (Non-Alcoholic)', de: 'Spezial Cocktails (Alkoholfrei)', ar: 'كوكتيلات سبيشل' },
    description: {
      en: 'Experience the art of mixology without the alcohol - our signature mocktails combine exotic fruits, premium ingredients, and creative flair.',
      de: 'Mixologie ohne Alkohol - exotische Fruechte und kreative Signature-Mocktails.',
      ar: 'استمتع بفن الكوكتيلات بدون كحول مع خلطات مميزة وفواكه استوائية.'
    },
    image: specialCocktailsImg,
    items: [
      { name: { en: 'Avalanche Cocktail', de: 'Avalanche Cocktail', ar: 'افلانش كوكتيل' }, price: '9,00 EUR', desc: { en: 'Mango, strawberry, maracuja, pineapple, orange, kiwi', de: 'Mango, Erdbeere, Maracuja, Ananas, Orange, Kiwi', ar: 'مانجو، فراولة، ماركوجا، أناناس، برتقال، كيوي' }, tags: ['nonAlcoholic', 'signature', 'bestSeller'] },
      { name: { en: 'Hawaii', de: 'Hawaii', ar: 'هاواي' }, price: '8,00 EUR', desc: { en: 'Pineapple, strawberry juice, mango, strawberry pieces, honey, cream', de: 'Ananas, Erdbeersaft, Mango, Erdbeerstuecke, Honig, Sahne', ar: 'أناناس، عصير فراولة، مانجو، قطع فراولة، عسل، كريمة' }, tags: ['nonAlcoholic'] },
      { name: { en: 'Jamaika', de: 'Jamaika', ar: 'جامايكا' }, price: '8,00 EUR', desc: { en: 'Mango, orange, pineapple, grenadine', de: 'Mango, Orange, Ananas, Grenadine', ar: 'مانجو، برتقال، أناناس، جراندين' }, tags: ['nonAlcoholic'] },
      { name: { en: 'Tropikal', de: 'Tropikal', ar: 'تروبيكال' }, price: '8,00 EUR', desc: { en: 'Maracuja, pineapple, orange, lemon, grenadine', de: 'Maracuja, Ananas, Orange, Zitrone, Grenadine', ar: 'ماركوجا، أناناس، برتقال، ليمون، جراندين' }, tags: ['nonAlcoholic'] },
      { name: { en: 'Hugo', de: 'Hugo', ar: 'هوجو' }, price: '8,00 EUR', desc: { en: 'Avocado, strawberry, mango', de: 'Avocado, Erdbeere, Mango', ar: 'أفوكادو، فراولة، مانجو' }, tags: ['nonAlcoholic'] },
      { name: { en: 'Chocodemo', de: 'Chocodemo', ar: 'شوكوديمو' }, price: '8,00 EUR', desc: { en: 'Banana, milk, Nutella, chocolate ice cream', de: 'Banane, Milch, Nutella, Eisschokolade', ar: 'موز، حليب، نوتيلا، آيس شوكولا' }, tags: ['nonAlcoholic'] },
      { name: { en: 'Banana Milk & Strawberry', de: 'Banane Milch & Erdbeere', ar: 'حليب موز وفراولة' }, price: '8,00 EUR', tags: ['nonAlcoholic'] },
    ],
  },
  {
    key: 'alkohol-getranke',
    title: { en: 'Alcoholic Drinks', de: 'Alkoholische Getränke', ar: 'مشروبات كحولية' },
    description: {
      en: 'Premium spirits and classic cocktails crafted for the discerning palate, perfect for celebrating special moments or unwinding in style.',
      de: 'Premium-Spirituosen und klassische Cocktails fuer besondere Momente.',
      ar: 'مشروبات كحولية فاخرة وكوكتيلات كلاسيكية لمحبي الذوق الرفيع.'
    },
    image: alcoholicDrinksImg,
    items: [
      { name: { en: 'Vodka Red Bull', de: 'Wodka Red Bull', ar: 'فودكا ريد بول' }, price: '8,00 EUR' },
      { name: { en: 'Vodka Orange', de: 'Wodka Orange', ar: 'فودكا برتقال' }, price: '8,00 EUR' },
      { name: { en: 'Vodka Mojito', de: 'Wodka Mojito', ar: 'فودكا موخيتو' }, price: '8,00 EUR' },
      { name: { en: 'Whisky Cola', de: 'Whisky Cola', ar: 'ويسكي كولا' }, price: '8,00 EUR' },
    ],
  },
  {
    key: 'obstsalate',
    title: { en: 'Fruit Salads', de: 'Obstsalate', ar: 'سلطات فواكه' },
    description: {
      en: 'A colorful celebration of fresh, seasonal fruits artfully arranged and enhanced with luxurious toppings like vanilla ice cream, honey, and nuts.',
      de: 'Frische saisonale Fruechte mit edlen Toppings wie Vanilleeis, Honig und Nuessen.',
      ar: 'تشكيلة فواكه موسمية طازجة مع إضافات فاخرة مثل الآيس كريم والعسل والمكسرات.'
    },
    image: fruitSaladsImg,
    items: [
      { name: { en: 'Tropikal', de: 'Tropikal', ar: 'استوائية' }, price: '8,50 EUR', desc: { en: 'Fruit pieces, vanilla ice cream, cream, honey, nuts', de: 'Fruchtstuecke, Eis Vanille, Sahne, Honig, Nuesse', ar: 'قطع فواكه، آيس فانيلا، قشطة، عسل، مكسرات' } },
      { name: { en: 'Nutella', de: 'Nutella', ar: 'نوتيلا' }, price: '8,50 EUR', desc: { en: 'Mixed fruits, Nutella cream, cream, nuts, chocolate ice cream', de: 'Gemischte Fruechte, Nutella Creme, Sahne, Nuesse, Eisschokolade', ar: 'فواكه مشكلة، نوتيلا، كريمة، مكسرات، آيس شوكولا' } },
      { name: { en: 'Lotus', de: 'Lotus', ar: 'لوتس' }, price: '8,50 EUR', desc: { en: 'Mixed fruits, Lotus butter, vanilla ice cream, nuts, cream', de: 'Gemischte Fruechte, Lotusbutter, Vanilleeis, Nuesse, Sahne', ar: 'فواكه مشكلة، زبدة لوتس، آيس فانيلا، مكسرات، قشطة' } },
      { name: { en: 'Bueno', de: 'Bueno', ar: 'بوينو' }, price: '8,50 EUR', desc: { en: 'Mixed fruits, vanilla ice cream, caramel, cream, nuts, Bueno biscuits', de: 'Gemischte Fruechte, Eis Vanilla, Karamell, Sahne, Nuesse, Bueno, Kekse', ar: 'فواكه مشكلة، آيس فانيلا، كراميل، قشطة، مكسرات، بسكوت بوينو' } },
    ],
  },
  {
    key: 'eiscreme',
    title: { en: 'Ice Cream', de: 'Eiscreme', ar: 'ايس كريم' },
    description: {
      en: 'Indulge in our authentic Arabic ice cream and premium European varieties, served with traditional accompaniments for a truly exotic treat.',
      de: 'Authentisches arabisches Eis und europaeische Klassiker mit traditionellen Beilagen.',
      ar: 'استمتع بالبوظة العربية الأصيلة وتشكيلة آيس كريم فاخرة.'
    },
    image: iceCreamImg,
    items: [
      { name: { en: 'Arabic Ice Cream with Cream', de: 'Arabisches Eis Mit Sahne', ar: 'بوظة عربي مع قشطة' }, price: '7,00 EUR' },
      { name: { en: 'Mixed Ice Cream Vanilla Chocolate Strawberry', de: 'Gemischte Eis Vanille Schokolade Erdbeer', ar: 'ايس مشكل فانيلا شوكولا فراولة' }, price: '7,00 EUR' },
      { name: { en: 'Kasita', de: 'Kasita', ar: 'كاسيتا' }, price: '7,00 EUR' },
      { name: { en: 'Cheese Dessert Ice Cream', de: 'Kase Dessert Eiscreme', ar: 'بوظة حلوة الجبن' }, price: '7,00 EUR' },
    ],
  },
  {
    key: 'kaiser-cocktails',
    title: { en: 'Kaiser Cocktails', de: 'Kaiser Cocktails', ar: 'كوكتيلات الامبراطور' },
    description: {
      en: 'Our crown jewels - the Kaiser collection features our most extravagant creations, loaded with fresh fruits, premium cream, and royal presentations fit for emperors.',
      de: 'Unsere Kronjuwelen: extravagante Kreationen mit frischen Fruechten und premium Sahne.',
      ar: 'تشكيلة الامبراطور: كوكتيلات فاخرة مليئة بالفواكه الطازجة والكريمة.'
    },
    image: kaiserCocktailImg,
    items: [
      { name: { en: 'Avalanche Kaiser', de: 'Avalanche Kaiser', ar: 'امبراطور افلانش' }, price: '10,00 EUR', desc: { en: 'Avocado, strawberry, mango, fruit pieces, cream, nuts, honey', de: 'Avocado, Erdbeer, Mango, Fruchtstuecke, Sahne, Nuesse, Honig', ar: 'أفوكادو، فراولة، مانجو، قطع فواكه، كريمة، مكسرات، عسل' }, tags: ['signature', 'bestSeller'] },
      { name: { en: 'Kaiser Strawberry', de: 'Kaiser Erdbeer', ar: 'امبراطور فرايز' }, price: '9,50 EUR', desc: { en: 'Mixed fruit pieces, strawberry juice, cream, honey, nuts', de: 'Gemischte Fruchtstuecke, Erdbeersaft, Sahne, Honig, Nuesse', ar: 'قطع فواكه مشكلة، عصير فراولة، كريمة، عسل، مكسرات' }, tags: ['signature'] },
      { name: { en: 'Kaiser Mango', de: 'Kaiser des Mangos', ar: 'امبراطور مانجا' }, price: '9,50 EUR', desc: { en: 'Mango juice, fruit pieces, cream, nuts', de: 'Mangosaft, Fruchtstuecke, Sahne, Nuesse', ar: 'عصير مانجو، قطع فواكه، كريمة، مكسرات' }, tags: ['signature'] },
      { name: { en: 'Cream Mix', de: 'Sahne Mix', ar: 'قشاطي' }, price: '9,50 EUR', desc: { en: 'Banana, milk, cream, honey, nuts', de: 'Banane, Milch, Sahne, Honig, Nuesse', ar: 'موز، حليب، كريمة، عسل، مكسرات' } },
      { name: { en: 'Avocado Cream Honey & Nuts', de: 'Avocado Sahne Honig & Nusse', ar: 'أفوكادو قشطة وعسل ومكسرات' }, price: '9,50 EUR' },
    ],
  },
  {
    key: 'shisha',
    title: { en: 'Shisha', de: 'Shisha', ar: 'أراكيل' },
    description: {
      en: 'Relax and unwind with our premium shisha selection, featuring exotic flavors and expertly prepared in our atmospheric lounge setting.',
      de: 'Entspanne mit unserer Premium-Shisha-Auswahl und exotischen Geschmacksrichtungen.',
      ar: 'استرخ مع تشكيلة الشيشة الفاخرة بنكهات مميزة وأجواء راقية.'
    },
    image: shishaImg,
    items: [
      { name: { en: 'Avalanche', de: 'Avalanche', ar: 'أركيلة الشلال' }, price: '13,00 EUR' },
      { name: { en: 'Cold Peach', de: 'Cold Peach', ar: 'خوخ بارد' }, price: '13,00 EUR' },
      { name: { en: 'Cold Melon', de: 'Cold Melon', ar: 'شمام بارد' }, price: '13,00 EUR' },
      { name: { en: 'Baja Blue', de: 'Baja Blue', ar: 'باجا بلو' }, price: '13,00 EUR' },
      { name: { en: 'Cinderella', de: 'Cinderella', ar: 'سندريلا' }, price: '13,00 EUR' },
      { name: { en: 'Lemon Fresh', de: 'Lemon Fresh', ar: 'ليمون فريش' }, price: '13,00 EUR' },
      { name: { en: 'Love 66', de: 'Love 66', ar: 'لوف 66' }, price: '13,00 EUR' },
      { name: { en: 'Lemon Mint', de: 'Zitrone Minze', ar: 'ليمون نعناع' }, price: '13,00 EUR' },
      { name: { en: 'Double Apple', de: 'Doppelapfel', ar: 'تفاحتين الفاخر' }, price: '13,00 EUR' },
      { name: { en: 'Gum Mint', de: 'Kaugummi Minze', ar: 'علكة ونعناع' }, price: '13,00 EUR' },
      { name: { en: 'Grape', de: 'Traube', ar: 'عنب' }, price: '13,00 EUR' },
      { name: { en: 'Watermelon', de: 'Wassermelone', ar: 'بطيخ' }, price: '13,00 EUR' },
      { name: { en: 'Argileh Babli', de: 'Argileh Babli', ar: 'أرجيلة بابلي' }, price: '16,00 EUR' },
      { name: { en: 'Argileh Fawakeh', de: 'Argileh Fawakeh', ar: 'أرجيلة فواكه' }, price: '18,00 EUR' },
    ],
  },
];
