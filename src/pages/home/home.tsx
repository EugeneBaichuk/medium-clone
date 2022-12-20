import Banner from 'components/Banner/Banner'
import React from 'react';
import styles from './home.module.scss';
import { Link, useLocation } from 'react-router-dom';
import loading from '../../assets/images/loading.png';
import sound from '../../audioClips/sound.mp3';
import { Howl, Howler } from 'howler';
import { text } from 'node:stream/consumers';
import ArticleGlobal from 'components/ArticleGlobal/ArticleGlobal';
import { useAppDispatch,useAppSelector } from '../../hooks/redux-hooks';
import { RootState } from '../../store/index';
import {fetchArticles} from '../../store/articleSlice';



interface Text {
    nameLink: string,
    active: Boolean,
    id: number,
}

const Home: React.FC = () => {


    // const dispatch = useAppDispatch();
    // const { status, articles } = useAppSelector((state: RootState) => state.article);

    // const baseUrl = `https://api.realworld.io/api/articles?limit=10&offset=0`;

    // const getArticles = async () => {
    //     dispatch(fetchArticles( {baseUrl}))
    //     // window.scrollTo(0, 0);
    //   }

    //   React.useEffect(() => {
    //     getArticles()
    //     // window.scrollTo(0, 0);
    //   }, []);



    // const audioClip = [
    //     {sound: sound , label: 'sound'}
    // ]

    // const soundPlay = (src: string) => {
    //     const sound = new Howl({
    //         src
    //     })
    //     sound.play()
    // }



    // const renderSound = () => {
    //     return audioClip.map((soundObj, index) => {
    //         return (
    //             <button key={index} onClick={() =>  soundPlay(soundObj.sound)}>
    //                 {soundObj.label}
    //             </button>
    //         )
    //     })
    // }



    // const anime = () => {
    //     setFrame((previousState ) => !previousState )
    //     soundPlay(sound)
    // }
    Howler.volume(1.0)





    const textLink = [
        {
            nameLink: 'Your Feed',
            active: false,
            id: 1,
        },
        {
            nameLink: 'Global Feed',
            active: true,
            id: 2,
        }
    ];

    const [text, setText] = React.useState<Text[]>(textLink)

    const getActiveTextLink = (id: number) => {
      const pactiveLink=   text.map((item) =>
            item.id === id ? { ...item, active: true } : { ...item, active: false }
        )
        setText(pactiveLink)
    }


    return (

        <div className={styles.home_wrapper} >
            <Banner />
            <div className={styles.home_content}>
                <div className={styles.home_content_main}>
                    <div className={styles.home_header}>
                        {text.map((link) => (
                            <p key={link.id} className={link.active ? styles.pp : styles.p} onClick={() => getActiveTextLink(link.id)}>{link.nameLink}</p>
                        ))}
                    </div>

                     {text[1].active ?
                     <ArticleGlobal />
                     : ''}

                </div>
                <div className={styles.home_aside_wrapper}>
                <div className={styles.home_aside}>
                    <div className={styles.home_aside_title}>Popular Tags</div>
                    <div className={styles.home_aside_content}>
                        <Link to='#' className={styles.home_content_text} >
                            <p >implementations</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >welcome</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >introduction</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >codebaseShow</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >ipsum</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >qui</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >et</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >quia</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >cupiditate</p>
                        </Link>
                        <Link to='#' className={styles.home_content_text}>
                            <p >deserunt</p>
                        </Link>
                    </div>
                    {/* {renderSound()} */}
                </div>
                </div>
            </div>
        </div>

    )
}

export default Home