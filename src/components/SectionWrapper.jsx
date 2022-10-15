import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
import Button from './Button'

const SectionWrapper = ({title, description, showBtn, mockupImg, banner, reverse, bgPath}) => {
  return (
    <>
    <div className={`${styles.section} ${banner}`} style={{backgroundImage: `url(${bgPath})`}}>
      <div className={`w-11/12 sm:w-full minmd:w-3/4`}>
      <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
        <img src={mockupImg ? mockupImg : assets.tflogo1} alt="mockup" className={`${styles.fullImg} ${reverse ? "fadeLeftMini" : "fadeRightMini"}`}/>
        </div>
        <div className={`${styles.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
        <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`}>{title}</h1>
        <p className={`${styles.descriptionText} ${reverse ? styles.blackText : styles.whiteText}`}>{description}</p>
        {showBtn && (
          <Button assetUrl={assets.expo} link="Deployed app"/>

        )}
        </div>

      </div>
    </div>
    </>
  )}

//styles section makes it a row
//banner is nice moving background
//<div className={` ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>

//style={{backgroundImage: `url(${ref})`}

export default SectionWrapper