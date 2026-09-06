


export const entry_info = {
    
        "Aug 30 2026": {
            basic : {
                title: 'Audio Mobile Home',
                tags: [
                    'Rhema',
                    'blender',
                    'react'
                ],
                color: 'blueviolet',
                description: 'Create new graphics for Rhema homepage'
            },
            covers: [
                {img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/MobileHomeFinal.png',
                        alt: 'new homepage'}
            ],
            cards: [
                {
                    type: 'slide',
                    img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/HomeMobileWire.png',
                    alt: 'wireframe for new homepage',
                },
                {
                    type: 'slide',
                    img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/rhema/cableWireframe.png',
                    alt: 'Audio wire block model',
                },
                {
                    type: 'slide',
                    img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/rhema/cableMaterial.png',
                    alt: 'Wire with materials added',
                },
            ]
        },
    // ENTRY FORMAT

    
    // "Date": {
    //     basic : {
    //         title: 'title',
    //         tags: [
    //             'ProjectName',
    //             'RelevantCat',
    //             'RelevantCat'
    //         ],
    //         color: 'color',
    //         description: 'description'
    //     },
    //     covers: [
    //         {img: 'staticImg', alt: 'staticAlt'},
    //         {img: 'featureImg', alt: 'featureAlt'},
    //     ],
    //     cards: [
    //         {
    //             type: 'text',
    //             txt: 'lorem'
    //         },
    //         {
    //             type: 'article',
    //             img: 'imgSrc',
    //             alt: 'imgAlt',
    //             txt: 'txt'
    //         },
    //         {
    //             type: 'links',
    //             links: [
    //                 {
    //                     icon: 'iconSRC',
    //                     iconAlt: 'iconAlt',
    //                     link: 'link'
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'slide',
    //             img: 'imgSRC',
    //             alt: 'imgAlt',
    //             txt: 'txt'
    //         },
    //         {
    //             type: 'log',
    //             logs: [
    //                 ['time', 'task', 'length'],
    //                 ['time', 'task', 'length'],
    //                 ['time', 'task', 'length'],
    //                 ['time', 'task', 'length']
    //             ]
    //         }
    //     ]
    // },

    
}

const dropFormats = 
            {'text': 
                {
                txt: 'lorem'
                },
                'article': {
                img: 'imgSrc',
                alt: 'imgAlt',
                txt: 'txt'
                },
                'links': {
                    links: [
                        {
                            icon: 'iconSRC',
                            iconAlt: 'iconAlt',
                            link: 'link'
                        }
                    ]
                },
                'slide': {
                img: 'imgSRC',
                alt: 'imgAlt',
                txt: 'txt'
                },
                'log':{
                    logs: [
                        ['time', 'task', 'length'],
                        ['time', 'task', 'length'],
                        ['time', 'task', 'length'],
                        ['time', 'task', 'length']
                    ]
                }
            }

const curStreams = ['Rhema', 'education', 'art', 'automation']

const sourceLog = {
    s000 : {
        nature : {
            time: 'June 2024',
            task: 'Timezones',
            goal: 'Learn APIs',
            color: 'aqua',
            values: [
                'engineering',
                'connection'
            ],
            skills: [
                'web development',
                'react',
                'APIs'
            ],
            parties: [
                'mapbox'
            ]
        },
        composition: [
            {
                type: 'cover',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/timezones.png',
                alt: 'timezones screencap',
                featureImg: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/timezones_preview.png',
                featureAlt: 'timezones preview',
            },
            {
                type: 'text',
                txt: `	I created timezones as my first react project. I had just finished my first React course, and I was excited to employ some of my knowledge on APIs on a real-world application. The goal of the project was simply to be able to select points around the globe and display their time difference. During this build: React Hooks, API Integration, and Javascript DateTime were all new concepts to me, and it definitely took me some time to tackle and tame these monsters. Although the app itself is very simple, I had alot to learn on the spot, and the build process from init to deploy took me about three weeks. Now, looking back I could probably wrap something like this up over a day or so, but thats a luxury of building with familiar materials.
	Major hurdle no. 1 was absolutely Mapbox and their wild version of documentation. Being new to APIs and async logic was expectedly technical grueling, but that actually wasn’t a major issue. Heads up if you’re going to try something like this, the utility and function of Mapbox outpaces their documentation by miles. Be on the lookout for outdated terms, and conflicting articles. The thing is just so large, that I’m honestly not surprised to see the docs being rolled out in such a piece meal fashion. After many frustrating hours I was able to find sanctuary in their example section. It shows a ton of applications alongside the code that created them, with the major draw being that they actually work. I ended up going through a few of these and hacking apart the useful bits to create a Frankenstein which I was later able to polish down into something presentable.
	After the Map was up and running my next challenge was to tailor the user interface for the purposes of connecting people. This involved pasting out information gathered during point placement in map box and using it to gather timezone information. For me, this is the fun part. I was able to inspect information coming out of mapbox API for timezone information and use that to determine what text to display to the user. For me this was the fun part, I love detective work and I quite enjoy a good logic puzzle. I did not, however, enjoy the constant crashes and re-renders that I was causing due to my weak understanding of appropriate hooks. That combined with the async logic created a delightful pattern of useEffect whack-a-mole, that lasted about a week until I finally gave in and appealed to the GPT gods for help. It was here I learned of the useCallback hook, without which, I doubt I ever would have escaped those woods.
	Seriously though. Check out the insane amount of hook stacking on this little app. What a ride. At this point I had gathered all of the data that I needed from the user input and the Mapbox and all I needed to do was some simple subtraction to display our time difference. Should be pretty straightforward right? Wrong. Since our globe is circular, and our clocks are reset every morning at 12:00AM, who is to say which point is actually ahead or behind? The information I gathered from Mapbox only gave me the timezones, not the actual date or time of these places. This is of course when I learned about old reliable JS DateTime. It took me awhile to dial in the proper options to get what I needed, but unlike our Mapbox adventure, the documentation was all there, so it was just matter of finding the relevant article. 
	So now I had the relevant regions from map box, along with their timezones. That information was then passed to DateTime to gather the actual times and difference between the places. All that was left to do was throw in little if-than wordplay, and the rest was history. All in all Im glad I chose this as an intro to React project. I of course honed in my API and React skills by leaps and bounds, but I also learned the valuable lesson of resilience. Still, I think it to be an incredible amount of fuss for something so appeasingly simple, don’t you?
	`
            },
            {
                type: 'links',
                links: [
                    {
                        icon: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/timezones.png',
                        iconAlt: 'timezones logo',
                        link: 'https://timezones-for-lovers.netlify.app'
                    }
                ]
            },
        ]
    },
    s001 : {
        nature : {
            time: ' June 2025',
            task: 'Hue Lum',
            goal: 'Small Business',
            color: 'orange',
            values: [
                'community',
                'innovation in design'
            ],
            skills: [
                'web development',
                'react',
                'shopify',
                'APIs'
            ],
            parties: [
                
            ]
        },
        composition: [
            {
                type: 'cover',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/demos/lamp_demo.png',
                alt: 'hue lum screencap',
                featureImg: 'https://imagehostclub.s3.us-west-1.amazonaws.com/demos/lamp_demo.gif',
                featureAlt: 'hue lum preview',
            }
        ]
    },
    s002 : {
        nature : {
            time: 'July 2025',
            task: 'Strata Design Studio',
            goal: 'Small Business',
            color: 'white',
            values: [
                'service brochure',
                'portfolio'
            ],
            skills: [
                'web development',
                'react'
            ],
            parties: [
                'Strata'
            ]
        },
        composition: [
            {
                type: 'cover',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/demos/strata.png',
                alt: 'roof of winchester mystery house',
            },
            {
                type: 'text',
                txt: 'Strata design studio is an independent historical architectural firm based in San Jose, California'
            },
            {
                type: 'links',
                links: [
                    {
                        icon: 'https://imagehostclub.s3.us-west-1.amazonaws.com/logos/Strata_LOGO_White.png',
                        iconAlt: 'strata logo',
                        link: 'https://architecture-b3l.pages.dev/'
                    }
                ]
            }
        ]
    },
    s003 : {
        nature : {
            time: 'June 2026',
            task: 'Alum Rock Press',
            goal: 'Indie Artists',
            color: 'maroon',
            values: [
                'community',
                'portfolio'
            ],
            skills: [
                'web development',
                'vanilla JS',
                'HTML/CSS'
            ],
            parties: [
                'Cal Tabuena Frolli'
            ]
        },
        composition: [
            {
                type: 'cover',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/arp.png',
                alt: 'ARP ScreenCap',
                txt: 'Alum Rock Press is a site representing the work and Studies of LA-based-artist Cal Tabuena Frolli.'
            },
            {
                type: 'links',
                links: [
                    {
                        icon: 'https://imagehostclub.s3.us-west-1.amazonaws.com/Cal/Logo.png',
                        iconAlt: 'ARP logo',
                        link: 'https://tabuenafrolli.com/'
                    }
                ]
            },
        ]
    },
    s004 : {
        nature : {
            time: 'Aug 30 2026',
            task: 'Audio Graphics',
            goal: 'Rhema',
            color: 'blue violet',
            values: [
                'web development',
                'interface design'
            ],
            skills: [
                'blender',
                'react'
            ],
            parties: [
                'Rhema'
            ]
        },
        composition: [
            {
                type: 'cover',
                img: 'ttps://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/MobileHomeFinal.png',
                alt: 'new homepage',
                txt: `Adding audio cords to the Rhema homepage`
            },
            {
                type: 'slide',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/rhema/cableMaterial.png',
                alt: 'audio cable 3D',
                txt: 'finished cable asset'
            },
            {
                type: 'slide',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/HomeMobileWire.png',
                alt: 'new home format sketch',
                txt: 'New homepage layout plan'
            },
            {
                type: 'slide',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/rhema/cableWireframe.png',
                alt: 'audio cable wireframe',
                txt: 'cable wireframe'
            },
            {
                type: 'slide',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/rhema/cableWireframe.png',
                alt: 'audio cable wireframe',
                txt: 'cable wireframe'
            },
        ]
    },
    s005 : {
        nature : {
            time: 'Sept 3 2026',
            task: 'Encryption',
            goal: 'Research',
            color: 'white',
            values: [
                'education',
                'community'
            ],
            skills: [],
            parties: []
        },
        composition: [
            {
                type: 'cover',
                img: 'https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/encryption.gif',
                alt: 'encryption gif',
                txt: 'The time has come to learn encryption'
            },
            {
                type: 'text',
                txt: `Im starting to realize that this is a necessary step for anyone who values independence in the coming world changes.
                On this day I vow to learn as much as I can via the respected texts, and then complete the HarvardX course on cryptography. 
                I need to start setting aside weekly time for study again.`,
            },
        ]
    },
    // sxxx : {
    //     nature : {
    //         time: 'xxx',
    //         task: 'xxx',
    //         goal: 'xxx',
    //         color: 'xxx',
    //         values: [],
    //         skills: [],
    //         parties: []
    //     },
    //     composition: [
    //         {
    //             type: 'cover',
    //             img: 'xxx',
    //             alt: 'xxx',
    //             featureImg: 'xxx',
    //             featureAlt: 'xxx',
    //             txt: 'xxx',
    //         },
    //         {
    //             type: 'img',
    //             img: 'xxx',
    //             alt: 'xxx',
    //         },
    //         {
    //             type: 'text',
    //             txt: 'xxx'
    //         },
    //         {
    //             type: 'article',
    //             img: 'xxx',
    //             alt: 'xxx',
    //             txt: 'xxx'
    //         },
    //         {
    //             type: 'links',
    //             links: [
    //                 {
    //                     icon: 'xxx',
    //                     iconAlt: 'xxx',
    //                     link: 'xxx'
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'slide',
    //             img: 'xxx',
    //             alt: 'xxx',
    //             txt: 'xxx'
    //         },
    //         {
    //             type: 'log',
    //             logs: [
    //                 ['xxx', 'xxx', 'xxx'],
    //                 ['xxx', 'xxx', 'xxx'],
    //             ]
    //         }
    //     ]
    // },
}

const sourceTags = (sourceID) => {
    let sourceTags = []
    // run through info
    // task, goal, values, skills, parties
    // sanitize data and add to taglist
    return sourceTags
    
}

const allTags = () => {
    let tagSet = {}
    // Run through SourceLog
    // let tags = sourceTags(sourceID)
    // update tagSet
        // examine list of tags individually
        // if setlist already contains tag
            //  add 1 to tags tally
            //  else add tag to setlist with a tally of 1
    return tagSet
}

const activeTags = () => {
    let activeTags = []
    // run through allTags
        // add any tag with a Tally of 2 or more to activeTags
    return activeTags
}

export const generateTable = () => {
    let table = {}
    // create stream list based on preset tag heirarchy
    // generate sources based on stream list
        // go through entry log and create sources
            // generate drops from composition
            // generate tags from nature
                // add tags to taglist
    return table
}

