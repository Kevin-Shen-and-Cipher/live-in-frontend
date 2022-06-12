import { CardProps } from "../../interfaces/ICard";
import Card from "./card";

const List = ({ cards }: { cards: CardProps[] }) => {

    const listItems = cards.map((element: CardProps, index) => {
        return (
            <Card key={element.title + "-" + index} distance={element.distance} title={element.title} url={element.url} />
        );
    });

    return (
        <div className="">
            {listItems.length ? listItems : <WithoutCards />}
        </div>
    );
};

const WithoutCards = () => {
    return (
        <div className="flex justify-center">
            <p className="text-2xl font-semibold text-gray-600">
                請搜尋!
            </p>
        </div>
    );
}



export default List;