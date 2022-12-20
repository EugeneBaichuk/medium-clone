import React from 'react';
import styles from './articleGlobal.module.scss';
import icon from '../../assets/images/person.svg';
import { ReactComponent as Heart } from '../../assets/images/heart2.svg';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { RootState } from 'store';
import { fetchArticles } from '../../store/articleSlice';



const ArticleGlobal: React.FC = () => {

    const dispatch = useAppDispatch();
    const { status, articles } = useAppSelector((state: RootState) => state.article);
    console.log(articles)
    const baseUrl = `https://api.realworld.io/api/articles?limit=10&offset=0`;

    const getArticles = async () => {
        dispatch(fetchArticles(baseUrl))
        // window.scrollTo(0, 0);
    }

    React.useEffect(() => {
        getArticles()
        // window.scrollTo(0, 0);
    }, []);



    const color = '#5cb85c';

    return (
        <>

            {status === 'loading' ?
                <p style={{marginTop: '20px'}} >Loading articles...</p> :
                articles.map((item: any, index) => (
                    <div className={styles.wrapper} key={index} >
                        <div className={styles.articleBlock}>
                            <div className={styles.infoArticle}>
                                <div className={styles.infoArticleBlock}>
                                    <div className={styles.iconArticle}>
                                        <img className={styles.imgArticle} src={item.author.image} />
                                    </div>
                                    <div className={styles.dateAndNameArticle}>
                                        <div className={styles.nameAutor}>{item.author.username}</div>
                                        <div className={styles.dateArticle}>
                                            {new Date(item.updatedAt).toLocaleString('en',
                                            {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.likeArticle}  >
                                    <Heart width={15} height={15} fill={color} className={styles.heart} />
                                    <p>{item.favoritesCount}</p>
                                </div>
                            </div>

                            <div className={styles.article}>
                                <div className={styles.titleArticle}>
                                    {item.title}
                                </div>
                                <div className={styles.textArticle}>
                                    {item.description}
                                </div>
                            </div>
                            <div className={styles.footerArticle} >
                                <div className={styles.footerReadMore}>Read more...</div>
                                <div className={styles.footerWords}>
                                    {item.tagList.map((item: string, index: number) => (
                                        <p key={index} >{item}</p>
                                    ))}
                                    {/* <p>rerum</p>
                        <p>maiores</p>
                        <p>omnis</p>
                        <p>quae</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))



            }
        </>
    )

}

export default ArticleGlobal