const services = [
    {
        "label": "Laser Hair Removal",
        "value": "Laser",
        "url": "/lasersessions",
        "available": true
    },
    {
        "label": "Permanent Makeup",
        "value": "Makeup",
        "url": "/makeupsessions",
        "available": true
    },
    {
        "label": "Scalp Pigmentation",
        "value": "Scalp",
        "url": "/scalpsessions",
        "available": true
    },
    {
        "label": "Skin Pigmentation",
        "value": "Skin",
        "url": "/skinsessions",
        "available": true
    },
    {
        "label": "Tattooing",
        "value": "Tattoo",
        "url": "/tattoosessions",
        "available": true
    },
    {
        "label": "Chemical Peels",
        "value": "Chem-Peel",
        "url": "/chem-peelsessions",
        "available": true
    },
    {
        "label": "Natural Peels",
        "value": "Natural-Peel",
        "url": "/nat-peelsessions",
        "available": true
    },
    {
        "label": "Microneedling",
        "value": "Microneedling",
        "url": "/micro-nsessions",
        "available": true
    },
    {
        "label": "Facial",
        "value": "Facial",
        "url": "/facialsessions",
        "available": true
    },
    {
        "label": "Sclerotherapy(Varicose/SpiderVeins)",
        "value": "Sclerotherapy",
        "url": "/sclerosessions",
        "available": true
    },
    {
        "label": "Botox Injections",
        "value": "Botox",
        "url": "/botoxsessions",
        "available": true
    },
    {
        "label": "Dermal Fillers",
        "value": "Fillers",
        "url": "/fillerssessions",
        "available": true
    },
    {
        "label": "Microdermabrasion",
        "value": "Microdermabrasion",
        "url": "/micro-dsessions",
        "available": true
    },
    {
        "label": "Body Contouring",
        "value": "Contouring",
        "url": "/contouringsessions",
        "available": true
    },
    {
        "label": "Facial Rejuvenation",
        "value": "Rejuvenation",
        "url": "/rejuvenationsessions",
        "available": true
    },
];


export default services.filter((service) => { return service.available })
