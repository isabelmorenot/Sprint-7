import React from "react";
import { useState, useEffect } from "react";
import {Button,Option,OptionsNumber,PageLanguages,Letters,PresButton} from "./styled"


function TotalServices () {
    let emptyServices = {
        web: 0,
        seo: 0, 
        ads: 0
    };
    let checkedLs = localStorage.getItem('checked');

    const [isChecked, setIsChecked] = useState(
      checkedLs
      ?JSON.parse(checkedLs)
      :emptyServices)
      
    const [pages, setPages] = useState(localStorage.getItem('pages') ? (localStorage.getItem('pages')) : 0);
    const [languages, setLanguages] = useState(localStorage.getItem('languages') ? (localStorage.getItem('languages')) : 0); 

    let totalPagesLanguages = pages * 30 + languages * 30;
        
    if(!isChecked.web){
        totalPagesLanguages = 0;
    }
      
    useEffect(()=>{
        try{
        setIsChecked(isChecked)
        setPages(pages)
        setLanguages(languages)
        localStorage.setItem('pages', pages)
        localStorage.setItem('languages', languages)
        localStorage.setItem('checked', JSON.stringify(isChecked))
        } catch (error){
            console.error(error)
        }
    },[pages, languages, isChecked])
    
    const totalAmount = isChecked.web + totalPagesLanguages + isChecked.seo + isChecked.ads; 

    return(

        <Letters>
            <p>¿Qué quieres hacer?</p>
            <div>
            {/* Web */}
            <div>
            <input
                type="checkbox"
                checked={Boolean(isChecked.web)}
                onChange={(e) => e.target.checked
                    ?setIsChecked({...isChecked, web: isChecked.web +500})
                    :setIsChecked({...isChecked, web: isChecked.web -500})
                }
            />
            <label htmlFor="webPage">
                Una página web (500€)
            </label>
                {Boolean(isChecked.web) &&
            <div> 
                <PageLanguages>
                <div>
                    <Option>
                        <label htmlFor="pages">
                            Número de páginas 
                        </label>
                        <OptionsNumber>
                            <Button name="morePages" onClick={()=>setPages(parseInt(pages)+1)}>+</Button>
                                <input 
                                    type="number"
                                    name="pages"
                                    style={{border:'none', width:'2rem'}} 
                                    value= {pages}
                                    onChange={(e)=>setPages(e.target.value)}
                                />
                            <Button name="lessPages" onClick={()=>setPages(pages > 0 ? pages - 1: pages)}>-</Button>
                        </OptionsNumber>
                    </Option>
                    <Option>
                        <label htmlFor="languages">
                            Número de idiomas 
                        </label>
                        <OptionsNumber>
                            <Button name="moreLanguages" onClick={()=>setLanguages(parseInt(languages)+1)}>+</Button>
                                <input
                                    type="number"
                                    name="languages"
                                    style={{border:'none', width:'2rem'}}
                                    value={(languages)}
                                    onChange={(e)=>setLanguages(e.target.value)}
                                />
                            <Button name="lessLanguages" onClick={()=>setLanguages(languages > 0 ? languages - 1: languages)}>-</Button>
                        </OptionsNumber>
                    </Option>
                        </div>
                            </PageLanguages>
                        </div>
                }
            </div>
            {/* SEO */}
            <div>
                <input
                    type="checkbox"
                    checked={Boolean(isChecked.seo)} 
                    onChange={(e) => e.target.checked
                        ?setIsChecked({...isChecked, seo: isChecked.seo +300})
                        :setIsChecked({...isChecked, seo: isChecked.seo -300})
                    }
                />
                <label htmlFor="seo">
                    Una consultoría SEO (300€)
                </label>
            </div>
            {/* Google Ads */}
            <div>
                <input
                    type="checkbox"
                    checked={Boolean(isChecked.ads)} 
                    onChange={(e) => e.target.checked
                        ?setIsChecked({...isChecked, ads: isChecked.ads +200})
                        :setIsChecked({...isChecked, ads: isChecked.ads -200})
                    }
                />
                <label htmlFor="ads">
                    Una campaña de Google Ads (200€)
                </label>
            </div>
            </div>
            <p>Precio: {totalAmount} €</p>
            <br/>
            <PresButton>
                <a href='/'>Volver inicio</a>
            </PresButton>
            
            
        </Letters> 

    )
}

export default TotalServices;