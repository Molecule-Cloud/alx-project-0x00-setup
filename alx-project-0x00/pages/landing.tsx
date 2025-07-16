import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <div className="p-8 space-y-6 max-w-2xl mx-auto">
                    <h1>Button Variations</h1>
    
                    <div className="flex gap-4 items-center">
                        <h3>Colors</h3>
                        <Button title="Primary" color="primary" />
                        <Button title="Secondary" color="secondary" />
                        <Button title="Danger" color="danger" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <h3>Sizes</h3>
                        <Button title="Small" size="sm" />
                        <Button title="Medium" size="md" />
                        <Button title="Large" size="lg" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <h3>Shapes</h3>
                        <Button title="Rounded_full" shape="rounded_full" />
                        <Button title="Rounded_medium" shape="rounded_md" />
                        <Button title="Rounded_small" shape="rounded_sm" />
                    </div>
                </div>
        </div>
    );
};

export default Landing;
