import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"


import {FaArrowUp, FaFilePdf, FaVideo} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {LuTextSelect} from "react-icons/lu";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import caterpillar_results from "./videos/few_shot_results/caterpillar.mp4"
import mug_handle_results from "./videos/few_shot_results/mug_handle.mp4"
import mug_lip_results from "./videos/few_shot_results/mug_lip.mp4"
import rack_results from "./videos/few_shot_results/rack.mp4"
import screwdriver_results from "./videos/few_shot_results/screwdriver.mp4"

import caterpillar_demos from "./images/demos/caterpillar.png"
import mug_handle_demos from "./images/demos/mug_handle.png"
import mug_lip_demos from "./images/demos/mug_lip.png"
import rack_demos from "./images/demos/rack.png"
import screwdriver_demos from "./images/demos/screwdriver.png"

import blue_mug from "./videos/language_results/carousel/blue_mug.mp4"
import clear_mug from "./videos/language_results/carousel/clear_mug.mp4"
import measuring_beaker from "./videos/language_results/carousel/measuring_beaker.mp4"
import measuring_scoop from "./videos/language_results/carousel/measuring_scoop.mp4"
import screwdriver from "./videos/language_results/carousel/screwdriver.mp4"
import teddy_bear from "./videos/language_results/carousel/teddy_bear.mp4"
import transparent_rack from "./videos/language_results/carousel/transparent_rack.mp4"
import water_jug from "./videos/language_results/carousel/water_jug.mp4"
import wooden_rack from "./videos/language_results/carousel/wooden_rack.mp4"

import lang_results from "./videos/language_results/lang_results.mp4"
import teaser_video from "./videos/teaser.mp4"


const Title: React.FC = ({children}) => {
    // Paper title
    return (
        <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center">{children}</h1>
    )
}

const Venue: React.FC = ({website, children}) => {
    return (
        <div className="flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5">
            <a className="no-underline" href={website} target="_blank">{children}</a>
        </div>
    )
}

const Abstract: React.FC = ({children}) => {
    return (
        <div>
            <div className="flex justify-center content-center">
                <p className="font-semibold text-2xl sm:text-3xl m-1 sm:m-2">Abstract</p>
            </div>
            <div className="flex justify-center content-center">
                <p className="text-justify font-light text-base sm:text-lg m-1 sm:m-1 max-w-[100%] sm:max-w-[620px]">{
                    children
                }</p>
            </div>
        </div>
    )
}

const Author: React.FC = ({children, website, firstAuthor, affiliations, lastAuthor}) => {
    return (
        <span className="text-center inline-block">
                <a href={website} target={"_blank"}
                   className="font-normal no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
            {firstAuthor || affiliations ?
                <sup className={"pl-0.5"}>{firstAuthor ?
                    <span className="font-bold">*</span> : null}{affiliations ? affiliations : null}</sup>
                : null}
            {lastAuthor ? null : <>,&nbsp;</>}
            </span>
    )
}

const Affiliation: React.FC = ({children, website, number}) => {
    return (
        <span className={"text-center inline-block mr-4"}>
            <sup className={"mr-0.5"}>{number}</sup>
            <a href={website} target={"_blank"}
               className="font-light no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
        </span>
    )
}

const ActionLink: React.FC = ({children, url, icon}) => {
    return (
        <span className={"text-center inline-block my-3.5 sm:my-2 mx-2"}>
            <a href={url} target={!url.startsWith("#") ? "_blank" : "_self"}
               className="text-xl no-underline font-normal text-[#009cff] bg-[#f9f9f9] hover:bg-[#f4f4f4] hover:transition-all px-4 py-3 rounded-xl">
                <span className="align-middle inline-flex justify-center mr-0.25">{icon}&nbsp;</span>
                <span>{children}</span>
            </a>
        </span>
    )
}

const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%] format format-md
                       md:format-base
                       lg:max-w-5xl lg:format-lg
                       format-blue dark:format-invert">
            {children}
        </div>
    )
}

const Main: React.FC = ({children}) => {
    return (
        <main className="pt-6 lg:pt-12 bg-white dark:bg-gray-900">
            {children}
        </main>
    )
}


const FewShotResult: React.FC = ({children, id, demos, demos_label, video, hidden}) => {
    // Result for Few-Shot Manipulation with Demos on left, and video on right
    return (
        // add hidden if hide is true
        <div id={id}
             className={"grasp-result flex flex-row flex-wrap justify-items-center items-center mt-6" + (hidden ? " hidden" : "")}>
            <div className="sm:basis-1/3 align-middle items-center sm:pr-5 md:pr-10 pb-4 sm:pb-0">
                <p className="text-center font-medium text-2xl !mt-0 !mb-2">{children}</p>
                <img src={demos} alt={children} className="mx-auto !my-4 max-w-[80%] sm:max-w-[100%]"/>
                <p className="text-center !mt-2 !mb-0">{demos_label}</p>
            </div>
            <div className="sm:basis-2/3">
                <video autoPlay muted playsInline loop alt={children}
                       className="rounded-lg !my-0 !sm:my-0">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}


export const Head: HeadFC = () => <title>Distilled Feature Fields Enable Few-Shot Language-Guided Manipulation</title>

const carouselResponsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    }
};


const CarouselItem: React.FC = ({children, video}) => {
    return (
        <div>
            <video autoPlay muted playsInline loop alt={video}
                   className="carousel-video px-1.5 rounded-xl">
                <source src={video} type="video/mp4"/>
            </video>
            {/*<p className="text-center">{children}</p>*/}
        </div>
    )
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Main>
                <Article>
                    <Title>
                        <span className="font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-r from-pink-500 via-indigo-600 to-emerald-400">
                            Distilled Feature Fields
                        </span>
                        &nbsp;
                        <span className="text-stone-800">Enable Few-Shot Language-Guided Manipulation</span>
                    </Title>

                    <Venue website={"https://www.corl2023.org/"}>
                        <span className="font-normal text-stone-600 hover:text-transparent hover:bg-clip-text
                        hover:bg-gradient-to-r hover:from-pink-500 hover:via-indigo-600 hover:to-emerald-400
                        hover:transition-all">CoRL 2023 (Best Paper)</span>
                    </Venue>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-4">
                        <Author website={"https://shen.nz/"} firstAuthor={true} affiliations={"1"}>William Shen</Author>
                        <Author website={"https://www.episodeyang.com/"} firstAuthor={true} affiliations={"1,2"}>Ge
                            Yang</Author>
                        <Author website={"https://www.linkedin.com/in/alan-yu1/"} affiliations={"1"}>Alan Yu</Author>
                        <Author website={"https://www.linkedin.com/in/jansenwong/"} affiliations={"1"}>Jansen
                            Wong</Author>
                        <Author website={"https://people.csail.mit.edu/lpk/"} affiliations={"1"}>Leslie
                            Kaelbling</Author>
                        <Author website={"https://people.csail.mit.edu/phillipi/"} affiliations={"1"} lastAuthor={true}>Phillip
                            Isola</Author>
                    </div>

                    {/* Affilations */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-1">
                        <Affiliation website={"https://www.csail.mit.edu/"} number={"1"}>MIT CSAIL</Affiliation>
                        <Affiliation website={"https://iaifi.org/"} number={"2"}>Institute of AI and Fundamental
                            Interactions (IAIFI)</Affiliation>
                    </div>
                    <div className="flex flex-wrap justify-center text-l lg:text-l">
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">*</sup>Indicates equal contribution.</span>
                    </div>

                    {/* Action Links */}
                    <p className="flex flex-wrap justify-center">
                        <ActionLink url={"https://arxiv.org/abs/2308.07931"} icon={<FaFilePdf/>}>Paper</ActionLink>
                        <ActionLink url={"#video"} icon={<FaVideo/>}>Video</ActionLink>
                        <ActionLink url={"https://github.com/f3rm/f3rm"} icon={<AiFillGithub/>}>Code</ActionLink>
                    </p>

                    {/* Teaser Video */}
                    <video autoPlay controls muted playsInline loop alt="Teaser Video"
                           className="border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[95%]">
                        <source src={teaser_video} type="video/mp4"/>
                    </video>

                    <div className="flex justify-center">
                        <p className="text-center text-xl !mt-0 !mb-2 font-medium max-w-[100%] md:max-w-[75%]">
                            We distill features from 2D foundation models into 3D feature fields, and enable few-shot
                            language-guided manipulation that generalizes across object poses, shapes, appearances and
                            categories.
                        </p>
                    </div>
                </Article>

                <div className="my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70">
                    <div
                        className="mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-2 md:py-4 px-2 md:px-4">
                        <div className="relative pb-8 mb-3">
                            <Carousel responsive={carouselResponsive} infinite={true} showDots={true}
                                      renderDotsOutside={true}
                                      beforeChange={(previousSlide, {currentSlide, onMove}) => {
                                          // play all carousel-video, as the browser doesn't like autoplaying them all
                                          const videos = document.getElementsByClassName("carousel-video");
                                          for (let i = 0; i < videos.length; i++) {
                                              // play if video is paused
                                              if ((videos[i] as HTMLVideoElement).paused) {
                                                  (videos[i] as HTMLVideoElement).play();
                                                  console.log("Started playing video " + (videos[i] as HTMLVideoElement).src);
                                              }
                                          }
                                      }}>
                                <CarouselItem video={clear_mug}>"Clear Mug"</CarouselItem>
                                <CarouselItem video={measuring_scoop}>"Measuring Scoop"</CarouselItem>
                                <CarouselItem video={teddy_bear}>"Teddy Bear"</CarouselItem>
                                <CarouselItem video={blue_mug}>"Blue Mug</CarouselItem>
                                <CarouselItem video={screwdriver}>"Screwdriver"</CarouselItem>
                                <CarouselItem video={water_jug}>"Water Jug</CarouselItem>
                                <CarouselItem video={measuring_beaker}>"Measuring Beaker"</CarouselItem>
                                <CarouselItem video={wooden_rack}>"Wooden Rack</CarouselItem>
                                <CarouselItem video={transparent_rack}>"Transparent Rack"</CarouselItem>
                            </Carousel>
                        </div>
                        <p className="text-center text-lg md:text-xl md:max-w-[85%] mx-auto">
                            We designate novel objects to grasp using <b>open-ended language queries</b>, and achieve
                            this using only ten demonstrations across four object categories.
                        </p>
                    </div>
                </div>

                <Article>
                    {/* Abstract */}
                    <Abstract>
                        Self-supervised and language-supervised image models contain rich knowledge of the world
                        that is important for generalization. Many robotic tasks, however, require a detailed
                        understanding of 3D geometry, which is often lacking in 2D image features. This work bridges
                        this 2D-to-3D gap for robotic manipulation by leveraging distilled feature fields to combine
                        accurate 3D geometry with rich semantics from 2D foundation models. We present a few-shot
                        learning method for 6-DOF grasping and placing that harnesses these strong spatial and semantic
                        priors to achieve in-the-wild generalization to unseen objects. Using features distilled from a
                        vision-language model, CLIP, we present a way to designate novel objects for manipulation via
                        free-text natural language, and demonstrate its ability to generalize to unseen expressions and
                        novel categories of objects.
                    </Abstract>

                    {/* YouTube Video */}
                    <h2 className="font-semibold border-b-[1px]" id="video">Video with Audio</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PA9rWWVWsc4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen className="rounded-lg"></iframe>
                    </div>

                    {/* Results */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">Robot Results</h2>

                    <h3 id="language-guided" className="!mt-4">Language-Guided Manipulation</h3>
                    <p>We present results on an example scene which we set up with novel objects in 6-DOF poses. We
                        provide the robot with just 10 demonstrations across 4 object categories (mugs, screwdrivers,
                        caterpillar toy, drying racks) in the form of 6-DOF grasp or place poses. We demonstrate the
                        ability to designate novel objects to manipulate via language queries that span color and
                        material properties, as well as <b>unseen object categories</b>.</p>
                    <video autoPlay controls muted playsInline loop alt="Language Guided Manipulation"
                           className="rounded-lg">
                        <source src={lang_results} type="video/mp4"/>
                    </video>

                    <h3 className="!mt-4" id="few-shot">Few-Shot Grasping Results</h3>
                    <p>
                        We provide the robot with just two demonstrations for each task, such as grasping a mug by its
                        lip. We show generalization across object poses, shapes, sizes and appearances. Our approach <b>does
                        not</b> make any assumptions about objectness, such as segmentation masks, as we optimize for a
                        gripper pose over the entire scene.
                    </p>
                    <div className="my-4 leading-8">
                        <span className="text-xl mr-1">Show results for </span>
                        <select className="rounded-xl" onChange={(e) => {
                            // Get the target div
                            const selected = e.target.value;
                            const targetDiv = document.getElementById(selected);

                            // div does not exist! Need to define a FewShotResult component
                            if (targetDiv === null) {
                                console.log("div " + selected + " is null! ")
                                return;
                            }

                            // Hide the current div by checking all divs with class grasp-result
                            const divs = document.getElementsByClassName("grasp-result");
                            for (let i = 0; i < divs.length; i++) {
                                // Skip target and hidden divs
                                if (divs[i] === targetDiv || divs[i].classList.contains("hidden")) {
                                    continue;
                                }

                                // Add hidden class to div and reset video
                                divs[i].classList.add("hidden");
                                divs[i].getElementsByTagName("video")[0].currentTime = 0;
                                console.log("Hiding div " + divs[i].id + " and reset video");
                            }

                            // Remove hidden class from target div
                            targetDiv.classList.remove("hidden");
                            console.log("Showing div " + targetDiv.id)
                        }}>
                            <option value="mug_lip">Grasp Mug Lip</option>
                            <option value="mug_handle">Grasp Mug Handle</option>
                            <option value="screwdriver">Grasp Screwdriver</option>
                            <option value="caterpillar">Grasp Caterpillar Ears</option>
                            <option value="rack">Place Cup on Rack</option>
                        </select>
                    </div>

                    {/* Few Shot Results */}
                    <FewShotResult id="mug_lip" demos={mug_lip_demos}
                                   demos_label="2 x Demos on a grey and a red mug" video={mug_lip_results}>
                        Grasp Mug Lip
                    </FewShotResult>

                    <FewShotResult id="mug_handle" demos={mug_handle_demos} hidden={true}
                                   demos_label="2 x Demos on a grey mug and a red mug" video={mug_handle_results}>
                        Grasp Mug Handle
                    </FewShotResult>

                    <FewShotResult id="screwdriver" demos={screwdriver_demos} hidden={true}
                                   demos_label="2 x Demos on an orange and a black screwdriver"
                                   video={screwdriver_results}>
                        Grasp Screwdriver
                    </FewShotResult>

                    <FewShotResult id="caterpillar" demos={caterpillar_demos} hidden={true}
                                   demos_label="2 x Demos on Caterpillar's left and right ear"
                                   video={caterpillar_results}>
                        Grasp Caterpillar Ears
                    </FewShotResult>

                    <FewShotResult id="rack" demos={rack_demos} hidden={true}
                                   demos_label="2 x Demos on a dark wooden rack" video={rack_results}>
                        Place Cup on Rack
                    </FewShotResult>

                    <h2 id="citation" className="border-b-[1px]">Citation</h2>
                    <div className="relative overflow-auto">
                        <pre className="bg-gradient-to-r from-pink-100 via-indigo-100 to-emerald-100 !my-0">
                            <code id="citation-bib" className="font-medium text-slate-800">{
                                `@inproceedings{shen2023F3RM,
    title={Distilled Feature Fields Enable Few-Shot Language-Guided Manipulation},
    author={Shen, William and Yang, Ge and Yu, Alan and Wong, Jansen and Kaelbling, Leslie Pack and Isola, Phillip},
    booktitle={7th Annual Conference on Robot Learning},
    year={2023}
}`}
                            </code>
                        </pre>
                        <div className="absolute top-0 right-0">
                            <button className="float-right text-2xl text-indigo-500 bg-white hover:bg-slate-50
                            hover:text-indigo-600 hover:transition-all rounded-full p-2 m-3 invisible md:visible"
                                    onClick={() => {
                                        // Select all text in the code block
                                        let bib = document.getElementById("citation-bib");
                                        let range = document.createRange();
                                        let selection = window.getSelection();

                                        // Check not null
                                        if (bib == null || range == null || selection == null) {
                                            return;
                                        }
                                        range.selectNode(bib);
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }}>
                                <LuTextSelect/>
                            </button>
                        </div>
                    </div>
                </Article>

                <footer className={"flex flex-col justify-center bg-gray-50 mt-8 py-8"}>
                    {/*click to go back to top*/}
                    <div className="flex justify-center align-middle text-lg">
                        <a role="button" className="text-blue-500" onClick={() => {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                                <span
                                    className="align-text-top inline-flex justify-center mr-0.25"><FaArrowUp/>&nbsp;</span>
                            <span>Back to Top</span>
                        </a>
                    </div>
                    <div className="mt-2.5 text-center">
                        Website source code on&nbsp;
                        <a href="https://github.com/f3rm/f3rm.github.io" target="_blank" className="text-blue-500">
                            <span
                                className="align-text-top inline-flex justify-center mr-0.25"><AiFillGithub/>&nbsp;</span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </footer>
            </Main>
        </>
    )
}

export default IndexPage
