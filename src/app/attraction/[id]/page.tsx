// app/attraction/[id]/page.tsx

interface AttractionPageProps {
    params: Promise<{
        id: string;
    }>;
}

const AttractionPage = async ({ params }: AttractionPageProps) => {
    console.log("Firing Component");
    const { id } = await params;

    // Fetch attraction data here if needed
    // const attraction = await fetchAttractionData(id);

    return (
        <div>
            <h1>Attraction Details</h1>
            <p>Viewing attraction with ID: {id}</p>
            {/* Display attraction data if fetched */}
        </div>
    );
};

export async function generateStaticParams() {
    console.log("Firing API");

    // Simulated example; replace with a real API call to fetch attraction IDs
    const attractions = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];

    const paths = attractions.map((attraction) => ({
        params: { id: attraction.id },
    }));

    console.log("End API");
    return paths;
}

export default AttractionPage;
