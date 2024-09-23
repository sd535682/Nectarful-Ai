import Carousel_Card from '../components/carousel_card';
import {FlatList} from 'react-native';

export default function HomeCarousel() {
  const data = [
    {
      fact: 1,
      text: 'Blueberries have the highest antioxidant content ✔ ',
      url: `https://bbdojrpejimgligqtvqn.supabase.co/storage/v1/object/public/carousel/blueberry.png?t=2024-08-13T15%3A28%3A30.112Z`,
    },
    {
      fact: 2,
      text: 'Strawberries are not true berries but aggregate of peach and pear ✔ ',
      url: `https://bbdojrpejimgligqtvqn.supabase.co/storage/v1/object/public/carousel/morango.png?t=2024-08-13T15%3A29%3A04.364Z`,
    },
    {
      fact: 3,
      text: 'Raspberries are a good source of manganese ✔ ',
      url: `https://bbdojrpejimgligqtvqn.supabase.co/storage/v1/object/public/carousel/framboesa.png?t=2024-08-13T15%3A28%3A40.609Z`,
    },
  ];

  const renderItem = ({item, index}) => {
    return <Carousel_Card key={index} props={item} />;
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      initialNumToRender={3}
      keyExtractor={item => item.fact.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
}
