import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <div className="flex-gap-4 mt-4">
                <h1 className="font-semibold text-lg mb-3">Button Styles</h1>
                <div className="flex gap-4">
                    <Button title="Rounded Large" styles="rounded-lg" />
                    <Button title="Rounded Medium" styles="rounded-md" />
                    <Button title="Rounded Small" styles="rounded-sm" />
                    <Button title="Rounded Full" styles="rounded-full" />
                </div>
            </div>

            <div className="flex-gap-4 mt-4">
                <h1 className="font-semibold text-lg mb-3">Button Sizes</h1>
                <div className="flex gap-4">
                    <Button title="Small" styles="px-4 py-3 rounded-sm" />
                    <Button title="Medium" styles="px-5 py-3 rounded-sm" />
                    <Button title="Large" styles="px-10 py-4 rounded-sm" />
                </div>
            </div>
        </div>
    );
};

export default Landing;
