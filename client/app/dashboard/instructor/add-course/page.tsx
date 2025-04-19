import InputField from '@/components/ui/InputField';
import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import { FaHeading, FaDollarSign ,FaAlignLeft} from 'react-icons/fa';
import ImageUpload from '@/components/ui/ImageUpload';
import TextareaField from '@/components/ui/TextAreaField';

export default function AddCoursePage() {
    return (
        <Container className="py-12 max-w-2xl mx-auto">
            <div className="bg-white p-8 shadow rounded-xl">
                <Title title="Add New Course" className="mb-6 text-center" />
                <form className="space-y-5">
                    <InputField
                        name="title"
                        type="text"
                        required
                        placeholder="Course Title"
                        icon={FaHeading}
                    />
                    <TextareaField
                        name="content"
                        placeholder="Course Description"
                        required
                        icon={FaAlignLeft}
                    />
                    <InputField
                        name="price"
                        type="number"
                        required
                        placeholder="Price (USD)"
                        icon={FaDollarSign}
                    />
                    <ImageUpload name="image" required/>
                    <button
                        type="submit"
                        className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition"
                    >
                        Create Course
                    </button>
                </form>
            </div>
        </Container>
    );
}