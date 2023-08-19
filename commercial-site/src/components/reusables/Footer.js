/** @format */

const Disclaimer = () => {
    return (
        <div>
            <p>
                <strong>Disclaimer:</strong> this website is not an actual
                e-commerce website and only serves to demonstrate technical
                expertise. You cannot buy anything from this website. Email
                address and telephone number present in the contact information
                are mere fictional. The currency used here is fictional.
            </p>
        </div>
    );
};

const GithubLogo = ({ theme }) => {
    if (theme === 'dark' || theme === 'amethystAurora') {
        return <i className='devicon-github-original-wordmark'></i>;
    } else {
        return <i className='devicon-github-original-wordmark colored'></i>;
    }
};

const Contact = ({ theme }) => {
    return (
        <div className='text-clip'>
            <p>
                <strong>Telephone: </strong>555-555-5555
            </p>
            <p>
                <strong>Email: </strong>example@example.com
            </p>
            <a
                href='https://github.com/Th0se/shopping_cart'
                aria-label='Visit the Github repository of this website in a new tab'
                target='_blank'
                rel='noreferrer'
                className='text-center focus:bg-text focus:text-primaryBackground'
            >
                <GithubLogo theme={theme}></GithubLogo>
                https://github.com/Th0se/shopping_cart
            </a>
        </div>
    );
};

const Switch = ({ handleTheme }) => {
    return (
        <div className='grid grid-rows-2 text-center border-text border-2 p-3'>
            <p>Themes</p>
            <div className='grid grid-rows-2 grid-cols-2 gap-2'>
                <button
                    onClick={handleTheme.light}
                    className='border-text border-2 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground'
                >
                    Light Theme
                </button>
                <button
                    onClick={handleTheme.dark}
                    className='border-text border-2 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground'
                >
                    Dark Theme
                </button>
                <button
                    onClick={handleTheme.pastelChaos}
                    className='border-text border-2 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground'
                >
                    Pastel Chaos
                </button>
                <button
                    onClick={handleTheme.amethystAurora}
                    className='border-text border-2 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground'
                >
                    Amethyst Aurora
                </button>
            </div>
        </div>
    );
};

const Footer = ({ theme, handleTheme }) => {
    return (
        <footer className='p-4 md:grid md:grid-cols-3 md:gap-x-2'>
            <Disclaimer></Disclaimer>
            <Contact theme={theme}></Contact>
            <Switch handleTheme={handleTheme}></Switch>
        </footer>
    );
};

export default Footer;
