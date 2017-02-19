/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {

    name: 'Edward Hornung',
    role: 'Web Strategist',
    contacts: {
        mobile: '480-735-9845',
        email: 'edward.hornung@gmail.com',
        github: 'https://github.com/ehornung01',
        location: 'Corpus Christi, Texas'
    },
    welcomeMessage: "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
    skills: [
        'HTML & CSS', 'Jquery', 'Javascript', 'Bootstrap'
    ],
    biopic: 'https://www.youtube.com/watch?v=XyJAX8F2jPg&list=PL1BA5553A49637634',
    display: function myName() {
        $('#name').text(bio.name);
        $('#role').text(bio.role);
        $('.mobile').text(bio.contacts.mobile);
        $('.email').text(bio.contacts.email);
        $('.github').text(bio.contacts.github);
        $('.location').text(bio.contacts.location);
        $('.biopic').attr('src', 'images/fry.jpg');
        $('.welcome-message').text(bio.welcomeMessage);
    }
};

var education =

    {

        schools: [{
            name: 'Arizona State University',
            location: 'Tempe, Arizona',
            degree: 'Bachelor of Liberal Arts and Sciences',
            majors: 'Global Studies',
            dates: 'August 2004 - May 2008',
            url: "https://www.asu.edu/"
        }],
        onlineCourses: [{
            title: 'Front-End Web Development',
            school: 'Udacity',
            dates: 'January 2017 - Present',
            url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001/',
        }, ],

        display: function learnings() {

            education.schools.forEach(function(e) {

                $("#education").append(HTMLschoolStart);

                var formattedName = HTMLschoolName.replace("%data%", e.name).replace('#', e.url);
                var formattedDegree = HTMLschoolDegree.replace("%data%", e.degree);
                var formattedDates = HTMLschoolDates.replace("%data%", e.dates);
                var formattedLocation = HTMLschoolDates.replace("%data%", e.location);
                var formattedMajor = HTMLschoolMajor.replace("%data%", e.majors);


                $(".education-entry").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
            });

            $('#education').append(HTMLonlineClasses);
            $('#education').append(HTMLschoolStart);


            education.onlineCourses.forEach(function(e) {
                var formattedTitle = HTMLonlineTitle.replace("%data%", e.title).replace("#", e.url);
                var formattedSchool = HTMLonlineSchool.replace("%data%", e.school);
                var formattedDates = HTMLonlineDates.replace("%data%", e.dates);
                var formattedUrl = HTMLonlineURL.replace('%data%', e.url).replace('#', e.url);



                $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
            });
        }
    };

var work = {
    jobs: [{
            employer: 'IBM CORPORATION',
            title: 'Web Strategist',
            location: 'Austin, TX',
            dates: 'August 2014 – May 2016',
            description: 'Coordinated website translations for the Information Management and Enterprise Content Management business unit categories covering 11 languages for more than 250 specific products, each with stand-alone URL destinations'
        },
        {
            employer: 'FLIPTURN COMMUNICATIONS',
            title: 'Digital Marketing Consultant',
            location: 'Phoenix, AZ',
            dates: 'October 2013 – July 2014',
            description: 'Established web presence including navigation, SEO and social strategy',
        },
        {
            employer: 'GANNETT COMPANY INC.',
            title: 'Digital Marketing Consultant',
            location: 'Phoenix, AZ',
            dates: 'July 2011 – September 2013',
            description: 'Conducted digital audits for existing and prospective clients, ranging from small businesses to multimillion-dollar franchises including Jiffy Lube, USA BMX, and Howard University'
        },
        {
            employer: 'KUEHNE & NAGEL',
            title: 'Ocean Export Agent',
            location: 'Phoenix, AZ',
            dates: 'January 2011 – March 2011',
            description: ' Coordinated container shipments for export from the U.S. to Asia and abroad'
        },
        {
            employer: 'HANJIN SHIPPING CO. LTD',
            title: 'Export Documentation Specialist',
            location: 'Phoenix, AZ',
            dates: 'August 2008 – May 2010',
            description: 'Performed customs clearance for every vessel out of the Pacific Northwest for the entire U.S. region',
        },
        {
            employer: 'free-hotspot.com',
            title: 'Intern',
            location: 'Dublin, Ireland',
            dates: 'May 2007 – August 2007',
            description: 'Identified and compiled hotspot venues proximate to the E.U. Parliament, Council and Commission in Brussels, Belgium as well as the World Economic Forum in Davos, Switzerland for partner Microsoft'
        }
    ],
    display: function myJobs() {

        work.jobs.forEach(function(e) {

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", e.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", e.title);
            var formattedDates = HTMLworkDates.replace("%data%", e.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", e.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", e.description);

            $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);

        });
    }
};

var projects = {

    myProjects: [

        {
            title: 'Project 1',
            dates: '2017',
            description: "Website that performs a specific function",
            images: 'http://h7ip4n5r86idrrms.zippykid.netdna-cdn.com/wp-content/uploads/2013/09/blueprint.jpg'
        }
    ],
    display: function allProjects() {

        projects.myProjects.forEach(function(project) {

            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedImage = HTMLprojectImage.replace("%data%", 'images/197x148.gif');

            $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription + formattedImage);
        });
    }
};


function aba(e) {

    console.log("ready!");


    $('#header').prepend(HTMLheaderName + HTMLheaderRole);

    $('#topContacts').append(HTMLmobile + HTMLemail + HTMLgithub + HTMLlocation);
    $('#footerContacts').append(HTMLmobile + HTMLemail + HTMLgithub + HTMLlocation);
    $('#header').append(HTMLbioPic + HTMLwelcomeMsg + HTMLskillsStart);
    $(bio.skills).each(function() {
        $('#header').append($(HTMLskills));
        $('.skillSet').last().text(this);
    });

    bio.display();
    work.display();
    projects.display();
    education.display();
    $('#header').append(internationalizeButton);
    $('#mapDiv').append(googleMap);

}

aba();
window.addEventListener('load', initializeMap);