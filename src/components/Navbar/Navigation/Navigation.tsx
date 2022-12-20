import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navigation.module.scss';


const Navigation:React.FC = () => {

  // const [toLink, setToLink] = React.useState(0)
  // const [select, setSelect] = React.useState(0)
  const [link, setLink] = React.useState<string[]>([]);
  const links = ['Home', 'Sing in', 'Sing up'];
  const linkTo = ['/', '/login', '/register'];

  const onSelect = (id:number) => {
    // setSelect(id)
    // setToLink(id)
  }

  React.useEffect(() => {
    setLink(links)
  },[])


    const location = useLocation();
    console.log(location.pathname)
  return (
    <div className={styles.linkWrapper} >

{link.map((item, index) => (
  <Link to={linkTo[index]} className={location.pathname === linkTo[index] ? styles.linkItemChange : styles.linkItem} key={index}> <p  onClick={() => onSelect(index)}>{item}</p></Link>
)
)}
       {/* <Link to='/' className={styles.linkItem}> <p >Home</p></Link>
       <Link to='/login'className={styles.linkItem}><p >Sing in</p></Link>
       <Link to='/register'className={styles.linkItem}><p >Sing up</p></Link> */}
    </div>
  )
}

export default Navigation