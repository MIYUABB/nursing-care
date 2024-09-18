import React from "react";

function onPage(){
    let on_page = window.location
    let nav_item = document.getElementById(on_page["pathname"].split("/")[-1].split(".")[0])
    console.log(nav_item)
    nav_item!.className = "p-1 sm:p-2 text-end text-accent-col"
}

function Navbar(this: any) {

    return (
        <div id="navbar" className="z-50 flex w-screen h-32 place-content-between bg-gradient-to-r from-bg-primary to-bg-primary via-bg-secondary p-4">
            <h1 className="ml-8 w-fit place-self-center text-4xl sm:text-7xl text-title-col-primary font-sans">
                <a href="/" className="hover:underline">nursing-care</a>
            </h1>
            <label className="place-self-center">
                <div className="w-9 h-fit flex flex-col mr-8">
                    <input className="hidden peer" type="checkbox"/>
                    <div className="bg-text-col w-8 h-1 rounded peer-checked:hidden"></div>
                    <div className="bg-text-col w-8 h-1 rounded my-2 transition-all peer-checked:rotate-90"></div>
                    <div className="bg-text-col w-8 h-1 rounded peer-checked:hidden"></div>
                    <div id="navigation" className="invisible peer-checked:visible">
                        <nav
                            className="z-50 text-text-col text-xl sm:text-3xl flex flex-col absolute top-32 w-screen end-0 bg-gradient-to-r from-bg-primary to-bg-primary via-bg-secondary">
                            <a onClick={onPage} id="startseite" href="/"
                               className="p-1 sm:p-2 text-end text-text-col hover:text-title-col-primary">Startseite</a>
                            <a onClick={onPage} id="angebot" href="/career"
                               className="p-1 sm:p-2 text-end text-text-col hover:text-title-col-primary">Angebot</a>
                            <a onClick={onPage} id="case-management" href="/case-management"
                               className="p-1 sm:p-2 text-end text-text-col hover:text-title-col-primary">Case-Management</a>
                            <a onClick={onPage} id="kosten" href="/kosten"
                               className="p-1 sm:p-2 text-end text-text-col hover:text-title-col-primary">Kosten</a>
                            <a onClick={onPage} id="über_mich" href="/über_mich"
                               className="p-1 sm:p-2 text-end text-text-col hover:text-title-col-primary">Über Mich</a>
                            <a onClick={onPage} id="kontakt" href="/kontakt"
                               className="p-1 sm:p-2 text-end text-text-col hover:text-title-col-primary">Kontakt</a>
                            <a onClick={onPage} id="hilfe_im_notfall" href="/hilfe_im_notfall"
                               className="p-1 sm:p-2 text-end text-text-col hover:text-title-col-primary">Hilfe im Notfall</a>
                        </nav>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Navbar