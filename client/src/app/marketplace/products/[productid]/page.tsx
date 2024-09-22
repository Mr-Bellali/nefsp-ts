import Footer from "@/components/Footer";
import ProductViewer from "@/components/marketplace/full-view/ProductViewer";
import Header from "@/components/marketplace/Header";

const product= ({params}: {params :{ProductId: string ; reviewId: string}}) => {
    return (

        <section>
        <section className="lg:px-32 px-2 sm:px-10 space-y-4">
            <Header />
            <ProductViewer />
        </section>
        <Footer />
        </section>
    )
}

export default product