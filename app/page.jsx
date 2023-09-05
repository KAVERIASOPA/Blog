import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Your Thoughts, Your Voice, Your Blog.
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'>
                   Write. Share. Grow.
                </span>
            </h1>
            <p className='desc text-center'>
               Discover your blogging potential with our user-friendly platform 
                 create, share, and connect with fellow writers effortlessly!!!
            </p>
            <Feed />
        </section>
    );
};

export default Home;
