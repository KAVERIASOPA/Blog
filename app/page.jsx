import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Your Thoughts, Your Voice, Your Blog.
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'>
                   Create Your Blogs
                </span>
            </h1>
            <p className='desc text-center'>
                Generate better prompt to fasten your process of utilizing
                popular Generative AI Tools available in market!!
            </p>
            <Feed />
        </section>
    );
};

export default Home;
