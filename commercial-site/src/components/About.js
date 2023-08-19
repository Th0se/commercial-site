/** @format */

import Header from './reusables/Header';
import Footer from './reusables/Footer';
const About = ({ theme, handleTheme }) => {
    return (
        <div
            data-theme={theme}
            className='bg-primaryBackground text-text'
        >
            <Header></Header>
            <main>
                <div className='flex flex-col gap-y-1 p-3 items-center indent-20 bg-secondaryBackground'>
                    <p className='w-10/12'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam nec vestibulum lectus, vitae tincidunt ligula.
                        Morbi ac neque ipsum. Cras in libero vitae elit suscipit
                        posuere a quis mi. Proin tincidunt nunc eu fringilla
                        eleifend. Phasellus risus mi, placerat a sollicitudin
                        nec, aliquet at nulla. Suspendisse finibus accumsan nisl
                        quis placerat. Vestibulum quis semper libero, et
                        vestibulum enim. Suspendisse eget nulla mollis, lobortis
                        libero a, finibus nisi. In hac habitasse platea
                        dictumst. Nullam suscipit, mi sed congue luctus, tortor
                        metus luctus nisl, sit amet malesuada neque neque vel
                        neque. Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas.
                    </p>
                    <p className='w-10/12'>
                        Aenean id turpis non leo ultricies aliquet. Maecenas
                        eget varius enim. Aenean aliquet tempus rutrum. Sed
                        vulputate, nisl in rutrum fringilla, diam libero
                        molestie nibh, nec accumsan risus erat at elit.
                        Curabitur ac scelerisque orci, laoreet sodales libero.
                        Donec pellentesque nisi nunc, eget sollicitudin diam
                        condimentum a. Morbi venenatis pellentesque porttitor.
                        Quisque fermentum, eros vitae blandit vulputate, felis
                        neque vulputate ante, id tincidunt nunc velit interdum
                        orci. Maecenas blandit, mauris a vehicula dignissim,
                        purus magna hendrerit quam, sed varius nisl nisi sit
                        amet tortor.
                    </p>
                    <p className='w-10/12'>
                        Sed vel lobortis lacus, a suscipit nunc. Vivamus vitae
                        pharetra lectus, sit amet congue enim. Nullam interdum
                        enim ut auctor sodales. Mauris vulputate tristique
                        iaculis. Nunc venenatis tellus dolor, id rutrum mauris
                        dictum eget. Morbi quis sodales est. In imperdiet justo
                        justo, a varius purus cursus sed. Nam ullamcorper nisl
                        justo. Nulla ac lectus leo. Donec molestie erat eu felis
                        euismod, a tristique augue aliquam. Morbi ut neque
                        velit. Sed lobortis lobortis enim eget aliquet. Proin
                        tortor mi, cursus a sem blandit, blandit suscipit sem.
                        Vivamus bibendum sit amet risus egestas pretium.
                        Suspendisse vitae ullamcorper nulla, eu rhoncus elit.
                    </p>
                </div>
            </main>
            <Footer
                theme={theme}
                handleTheme={handleTheme}
            ></Footer>
        </div>
    );
};

export default About;
