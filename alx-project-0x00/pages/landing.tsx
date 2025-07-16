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
                    <Button title="Rounded Full" styles="rounded-full" />
                    <Button title="Rounded Medium" styles="rounded-md" />
                    <Button title="Rounded Small" styles="rounded-sm" />
                </div>

            </div>
        </div>
    );
};

export default Landing;
