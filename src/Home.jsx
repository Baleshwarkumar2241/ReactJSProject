import React from 'react'
import web from "../src/images/home.png"
import dev1 from "../src/images/File.png"
import dev2 from "../src/images/int3.png"
import dev3 from "../src/images/int2.png"
import cod from "../src/images/code.png"
import del from "../src/images/Delivery.png"
import bech from "../src/images/branch.png"
import log1 from "../src/images/Git1.png"
import log2 from "../src/images/int2.png"
import jira1 from "../src/images/jira1.png"
import jira2 from "../src/images/jira2.png"
import jira3 from "../src/images/jira3.png"
import cloud1 from "../src/images/cloud1.png"
import cloud2 from "../src/images/cloud2.png"

const Home = () => {
    return (<>
    <section id="header" className="">
        <div className="container-fluid home1">
            <div className="row">
                <div className="col-sm-8 mx-auto mt-5">
                    <h1 className="text-center fw-bold">Built for professional teams</h1>
                    <p className="lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis possimus, pariatur anim </p>
                    <p className="text-center lead fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="d-md-flex justify-content-md-center">
                    <button className="btn bg-primary btn-get-started btn-lg text-white">Get it free</button>
                    </div>
                    <p className="fw-normal mt-3 text-center">Lorem ipsum dolor sit amet <a className="text-primary bitbuc" href="#">Bitbucket data center </a> </p>
                </div>
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-sm-8 mt-4 mx-auto">
                            <img src={web} className="img-fluid animated" alt="home img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid dieve shadow-sm">
            <div className="row pt-5">
                <div className="col-sm-4 mx-auto">
                    <div className="text-center">
                        <img src={dev1} alt="" className="" height="150px" />
                    </div>                    
                    <h4 className="text-center">Free unlimited private repositories</h4>
                    <p className="text-center">Free for small teams under 5 and priced to scale <br /> with Standard ($3/user/mo) or Premium <br /> ($6/user/mo) plans.</p>
                </div>
                <div className="col-sm-4 mx-auto">
                    <div className="text-center">
                        <img src={dev2} alt="" className="" height="150px" />
                    </div>                    
                    <h4 className="text-center">Free unlimited private repositories</h4>
                    <p className="text-center">Free for small teams under 5 and priced to scale <br /> with Standard ($3/user/mo) or Premium <br /> ($6/user/mo) plans.</p>
                </div>
                <div className="col-sm-4 mx-auto">
                    <div className="text-center">
                        <img src={dev3} alt="" className="" height="150px" />
                    </div>                    
                    <h4 className="text-center">Free unlimited private repositories</h4>
                    <p className="text-center">Free for small teams under 5 and priced to scale <br /> with Standard ($3/user/mo) or Premium <br /> ($6/user/mo) plans.</p>
                </div>
            </div>
        </div>
    {/* Home3 ==========================================    */}
        <div className="container-fluid home2">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <img src={cod} alt="" height="450px" />
                </div>
                <div className="col-sm-4 mx-auto">
                   <small className="text-uppercase">code colaboration</small>
                   <h1 className="pb-3 pt-4">Build quality software with code review</h1> 
                   <p className="lead">Approve code review more efficiently with pull requests. Create a merge checklist with designated approvers and hold discussions right in the source code with inline comments.</p>
                </div>
            </div>
        </div>

 {/* Home4================================================        */}
        <div className="container-fluid home3">
            <div className="row">
                <div className="col-sm-4 mx-auto me-0 ps-0 hom1 mt-3">
                   <small className="">CONTINUOUS DELIVERY</small>
                   <h1 className="pb-3 pt-4">Deploy often with built-in continuous delivery</h1> 
                   <p className="lead">Bitbucket Pipelines with Deployments lets you build, test and deploy with integrated CI/CD. Benefit from configuration as code and fast feedback loops.</p>
                   <p className="pt-4"><a href="" className="text-primary">Learn More</a></p>
                </div>
                <div className="col-sm-6 mx-auto ms-0 ps-0">
                    <img src={del} alt="" height="420px" className="m-0 p-0" />
                </div>
            </div>
        </div>

 {/* Home5=========================================        */}
        <div className="container-fluid home2 pt-5 mt-5">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <img src={bech} alt="" height="450px" />
                </div>
                <div className="col-sm-4 mx-auto mt-3">
                   <small className="p-0">SECURITY</small>
                   <h1 className="pb-3 pt-4">Secure your workflow</h1> 
                   <p className="lead">Know your code is secure in the Cloud with IP whitelisting and required 2-step verification. Restrict access to certain users, and control their actions with branch permissions and merge checks for quality code.</p>
                   <p className="pt-4"><a href="" className="text-primary">Learn More</a></p>
                </div>
            </div>
        </div>


 {/* Home6===========================================        */}
        <div className="container-fluid home6">
            <div className="row">
                <h1 className="text-center mt-5  text-dark">New to Git</h1>
                <span className="text-center py-3 mb-3 fs-5">No problem. We have resources to get you up to speed, quickly.</span>
                <div className="col-sm-4 mx-auto me-0">
                    <div className="card ps-3 pt-2 cardbod shadow-none p-3 mb-5 bg-light rounded">
                        <div className="pt-3 ps-3 w-25">
                            <img src={log1} height="100px"   class="card-img-top" alt="..."/>
                        </div> 
                        <div className="card-body">
                            <h3 className="card-title py-3">Learn Git with interactive tutorials</h3>
                            <p className="card-text">Make Bitbucket your Git sandbox with tutorials that bring you up to speed with Git and help you build effective workflows.</p>
                            <p class=""><a href="#" class="text-primary">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mx-auto ms-0">
                    <div className="card pb-2 cardbod shadow-none p-2 mb-2 bg-light rounded">
                        <div className="pt-4 ps-3 w-25 ">
                            <img src={log2} height="100px"  class="card-img-top" alt="..."/>
                        </div>    
                        <div className="card-body">
                            <h3 className="card-title py-3">Download Sourcetree, our free Git GUI.</h3>
                            <p className="card-text">Say goodbye to the command line - Sourcetree simplifies how you interact with your Git repositories so you can focus on coding.</p>
                            <p className="pb-0"><a href="#" class="text-primary">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/* #home7=========================================================== */}



        <div className="container-fluid home6">
            <div className="row">
                <h1 className="text-center mt-5  text-dark">Integrations: Bitbucket, but better</h1>
                <span className="text-center py-3 mb-3 fs-5">Start with Bitbucket, then bring in the tools you already use to build better software</span>
                <div className="col-sm-4 bg-transparent">
                    <div className="card ps-3 pt-2 border-0 bg-transparent">
                        <div className="pt-3 ps-3 w-25">
                            <img src={jira1} height="100px"   class="card-img-top" alt="..."/>
                        </div> 
                        <div className="card-body">
                            <h3 className="card-title py-3">Jira Software</h3>
                            <p className="card-text">Improve efficiency by connecting branches, commits, and pull requests to Jira Software issues.</p>
                            <p class=""><a href="#" class="text-primary">See all integrations</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card pb-2 border-0 bg-transparent">
                        <div className="pt-3 ps-3 w-25 ">
                            <img src={jira2} height="100px"  class="card-img-top" alt="..."/>
                        </div>    
                        <div className="card-body">
                            <h3 className="card-title py-3">Connect framework</h3>
                            <p className="card-text">Customize Bitbucket your way with apps that embed right in Bitbucket’s UI, built with Bitbucket Connect.</p>
                            {/* <p className="pb-0"><a href="#" class="text-primary">Learn More</a></p> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card pb-2 border-0 bg-transparent">
                        <div className="pt-3 ps-3 w-25 ">
                            <img src={jira3} height="100px"  class="card-img-top" alt="..."/>
                        </div>    
                        <div className="card-body">
                            <h3 className="card-title py-3">Trigger webhooks</h3>
                            <p className="card-text">Integrate easily with systems you already use in your day-to-day using Bitbucket webhooks.</p>
                            {/* <p className="pb-0"><a href="#" class="text-primary">Learn More</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

{/* Home8===========================================================================         */}
        <div className="container home7">
            <div className="row">
                <h2 className="text-center pb-5 lh-base">More than 1 million teams and 10 <br /> million developers love Bitbucket</h2>
                <div className="col-sm-2 frod p-2  pe-0 me-0">
                    <h1 className="fw-bold text-secondary text-center">Frod</h1>
                </div>
                <div className="col-sm-2  ps-0 ms-0 pe-0 me-0">
                    <h1 className="fw-bold text-secondary text-center">PayPal</h1>
                </div>
                <div className="col-sm-2 mx-auto ps-0 ms-0 pe-0 me-0">
                    <h1 className="fw-bold text-secondary text-center">Wework</h1>
                </div>
                <div className="col-sm-2 mx-auto ps-0 ms-0">
                    <h1 className="fw-bold fs-1 text-secondary text-center">Pandora</h1>
                </div>
            </div>
            <hr className='new1 mt-5' />
        </div>
{/* Home8============================================== */}

        <div className="container-fluid home8 mt-5 pb-5">
            <div className="row pt-5 d-flex justify-content-around">
                <h1 className="text-center mt-5 text-dark lh-1">Simple plans hosted in the cloud. <br /> Priced to scale.</h1>
                <div className="col-sm-10">
                    <div className="container-fluid mt-4 pt-3 mb-2">
                        <div className="row">
                            <div className="col-sm-4 p-2">
                            <div className="card border-dark mb-3 text-center border-0 shadow-lg ">
                                <div className="card-header bg-white fs-4 py-3 fw-bold">Free</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title fs-1 fw-bold">USD 0</h5>
                                    <p className="card-text fs-4">per user/month</p>
                                    <p className="card-text fs-6">up to 5 users</p>
                                    <button type="button" class="btn btn-lg btn-outline-primary">Get Started</button>
                                    <p className="card-text py-4">Free forever</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 p-2">
                            <div className="card border-dark mb-3 text-center border-0 shadow-lg">
                                <div className="card-header fs-4 py-3 fw-bold">Standard</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title fs-1 fw-bold">USD 3</h5>
                                    <p className="card-text fs-4">per user/month</p>
                                    <p className="card-text fs-6">up to 5 users</p>
                                    <button type="button" class="btn btn-lg btn-outline-primary">Try it free</button>
                                    <p className="card-text py-4">Starts at $15 /month</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 p-2">
                            <div className="card border-dark mb-3 text-center border-0 shadow-lg">
                                <div className="card-header  fs-4 py-3 fw-bold">Premium</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title fs-1 fw-bold">USD 6</h5>
                                    <p className="card-text fs-4">per user/month</p>
                                    <p className="card-text fs-6">up to 5 users</p>
                                    <button type="button" class="btn btn-lg btn-outline-primary">try it free</button>
                                    <p className="card-text py-4">Starts at $15 /monthr</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="py-2 text-center shadow">
                        <p>
                            <span className="fw-bold">101+ users? </span>
                            <span className="fw-normal">We offer discounts for large teams!</span>
                            <span className="fw-nromal text-primary"><a href="#">Calculate your price</a></span>
                        </p>                     
                    </div>
                    <div className="text-center py-4">
                        <p>Want to host on your own server?</p>
                    </div>

                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-sm-10 mx-auto">
                    <div className="container home9">
                        <div className="row mt-5 pt-5">
                            <div className="col-sm-3">
                                <img src={cloud1} height="70px" alt="Mypic" />
                            </div>
                            <div className="col-sm-8">
                                <h1>See a demo of Bitbucket Cloud</h1>
                                <p>Want to see Bitbucket Cloud in action? Watch a recorded demo and get the facts from one of our experts so you can get started yourself.</p>
                                <p className="text-primary"><a href="#">Watch the demo</a></p>
                            </div>
                        </div>    
                        <div className="row mt-5 pt-2">
                            <div className="col-sm-3">
                                <img src={cloud2} height="100px" alt="Mypic" />
                            </div>
                            <div className="col-sm-8">
                                <h1>Want to host on your own server?</h1>
                                <p>Get full control of your source code with Bitbucket self-hosted options. As yourteam and workflow matures, graduate from a single serve deployment to a highly available, active-cluster with Bitbucket Data Center.</p>
                                <p className="text-primary"><a href="#">Bitbucket self-hosted options</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>    
        </div>

        <div className="container-fluid home10 mt-5">
            <div className="row mx-auto pt-4">
                <div className="col-sm-3 mx-auto ">
                   <h2>Bitbucket</h2>                   
                    <p className="lh-1 pt-3">Blog</p>
                    <p className="lh-1">Bitbucket writing program</p>
                    <p className="lh-1">API</p>
                    <p className="lh-1">Site status</p>                   
                </div>
                <div className="col-sm-3 mx-auto">
                   <h2>Resources</h2>                   
                    <p className="lh-1 pt-3">Technical support</p>
                    <p className="lh-1">Documentation</p>
                    <p className="lh-1">Plans & pricing</p>
                    <p className="lh-1">What is Version Control?</p>                   
                </div>
                <div className="col-sm-3">
                   <h2>Connect with us</h2>                   
                    <p className="lh-1 pt-3">Sign up for Git articles and resources:</p>
                    <p className="mt-5"><input type="text" className="form-control py-2" name="" id="" placeholder="Email Address" />
                    </p>                                   
                </div>
                <div className="col-sm-2">
                    <p className="btm">
                        <span><button className="btn btn-outline-primary ms-2 py-2 ">Subscribe</button></span>
                    
                    </p>   
                </div>
                <hr className="new1 mt-5" />
            </div>
            <div className="row mt-1">
                <div className="d-flex ">
                    <h1 className="fw-bold ms-5 me-4 pe-5 ps-5">ATLASSION</h1>
                    <p className="fw-bold me-2 mt-3">Privacy policy</p>
                    <p className="fw-bold me-2 mt-3 ms-4">Trems of use</p>
                    <p className="fw-bold me-2 mt-3 ms-4">copyright@ 2021</p>
                    
                </div>
            </div>
        </div>        


    </section>
    </>);
};

export default Home;