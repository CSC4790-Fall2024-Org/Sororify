sample_array = [
    [0, "Emma Johnson", ["Springfield", "Sangamon", "Illinois"], "Computer Science",
     ["NovaDance", "A Capella", "Club Basketball"], ["Reading", "Running", "Photography"]],
    
    [1, "Sophia Martinez", ["Baltimore", "Baltimore", "Maryland"], "Political Science",
     ["Special Olympics", "SGA", "RUIBAL"], ["Traveling", "Fashion", "Reality TV"]],
    
    [2, "Olivia Smith", ["Atlanta", "Fulton", "Georgia"], "Mechanical Engineering",
     ["Intramural Sports", "Club Soccer", "Club Volleyball"], ["Hiking", "Swimming", "Concerts"]],
    
    [3, "Isabella Brown", ["Houston", "Harris", "Texas"], "Finance",
     ["Mock Trial", "Business organizations", "Villanova TV"], ["Cooking", "Pop culture", "Cars"]],
    
    [4, "Amelia Jones", ["Denver", "Denver", "Colorado"], "Psychology",
     ["Blue Key", "The Villanovan", "Service organizations"], ["Yoga/Pilates", "Dancing", "Astrology"]],
    
    [5, "Mia Garcia", ["Seattle", "King", "Washington"], "Biology",
     ["Club Baseball", "Club Ice Hockey", "STEM organizations"], ["The beach", "Painting", "Weight lifting"]],
    
    [6, "Charlotte Davis", ["Chicago", "Cook", "Illinois"], "Marketing",
     ["NovaDance", "Club Golf", "Arts organizations"], ["Baking", "Horror movies", "Self-care"]],
    
    [7, "Harper Rodriguez", ["Miami", "Miami-Dade", "Florida"], "Civil Engineering",
     ["Dance Groups", "Club Tennis", "Engineering organizations"], ["Crafting", "Reading", "Mindfulness"]],
    
    [8, "Evelyn Wilson", ["Phoenix", "Maricopa", "Arizona"], "Economics (VSB)",
     ["Club Rugby", "New Student Orientation Program", "ROTC"], ["Jazz Music", "Fashion", "Card games"]],
    
    [9, "Abigail Taylor", ["New York City", "New York", "New York"], "Computer Engineering",
     ["Club Running", "Club Equestrian", "Dental Medicine"], ["Coffee", "Writing", "Rom coms"]],
    
    [10, "Emily Anderson", ["San Francisco", "San Francisco", "California"], "Chemical Engineering",
     ["Club Badminton", "Latin American Studies", "Nursing organizations"], ["Thrifting", "Swimming", "Comedy movies"]],
    
    [11, "Ava Hernandez", ["Philadelphia", "Philadelphia", "Pennsylvania"], "History",
     ["NovaDance", "Villanova TV", "Business organizations"], ["Coffee", "Reading", "Gardening"]],
    
    [12, "Scarlett Lopez", ["Detroit", "Wayne", "Michigan"], "International Business",
     ["Club Basketball", "Service organizations", "Cultural Studies"], ["Fashion", "Photography", "Reality TV"]],
    
    [13, "Victoria Scott", ["Boston", "Suffolk", "Massachusetts"], "Accounting",
     ["Mock Trial", "STEM organizations", "Rays of Sunshine"], ["Crafting", "Pop culture", "Astrology"]],
    
    [14, "Madison Green", ["Dallas", "Dallas", "Texas"], "Chemistry",
     ["Special Olympics", "NovaDance", "Intramural Sports"], ["Swimming", "Hiking", "Comedy movies"]],
    
    [15, "Grace Adams", ["Minneapolis", "Hennepin", "Minnesota"], "English",
     ["NovaDance", "Dance Groups", "Club Tennis"], ["Writing", "Rom coms", "Hip Hop Music"]],
    
    [16, "Chloe Baker", ["San Diego", "San Diego", "California"], "Computer Science",
     ["Club Soccer", "NovaDance", "Engineering organizations"], ["Running", "Weight lifting", "Concerts"]],
    
    [17, "Zoey Gonzalez", ["Portland", "Multnomah", "Oregon"], "Physics",
     ["NovaDance", "The Villanovan", "Villanova Student Musical Theatre"], ["Thrifting", "Cars", "Playing an instrument"]],
    
    [18, "Penelope Carter", ["Charlotte", "Mecklenburg", "North Carolina"], "Mathematics",
     ["Club Softball", "NovaDance", "Business organizations"], ["Baking", "Coffee", "Mindfulness"]],
    
    [19, "Riley Perez", ["Las Vegas", "Clark", "Nevada"], "Electrical Engineering",
     ["NovaDance", "Club Swim", "STEM organizations"], ["Traveling", "Concerts", "The beach"]],
    
    [20, "Nora Morris", ["Austin", "Travis", "Texas"], "Political Science",
     ["SGA", "NovaDance", "ROTC"], ["Reading", "Photography", "Gardening"]],
    
    [21, "Lily Rivera", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Psychology",
     ["NovaDance", "Club Volleyball", "Rays of Sunshine"], ["Dancing", "Crafting", "Reality TV"]],
    
    [22, "Zoe Cook", ["Chicago", "Cook", "Illinois"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Cooking", "Fashion", "Comedy movies"]],
    
    [23, "Mila Morgan", ["Denver", "Denver", "Colorado"], "Business Analytics",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Yoga/Pilates", "Painting", "Hip Hop Music"]],
    
    [24, "Avery Coleman", ["Houston", "Harris", "Texas"], "Computer Engineering",
     ["NovaDance", "Dance Groups", "NovaDance"], ["Running", "Reading", "Comedy movies"]],
    
    [25, "Nova Gray", ["San Francisco", "San Francisco", "California"], "Management",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Coffee", "Reality TV"]],
    
    [26, "Luna Ross", ["Seattle", "King", "Washington"], "Mechanical Engineering",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Baking", "Horror movies"]],
    
    [27, "Layla Reyes", ["Atlanta", "Fulton", "Georgia"], "Marketing",
     ["NovaDance", "Club Softball", "NovaDance"], ["Fashion", "Crafting", "Thrifting"]],
    
    [28, "Aurora Hughes", ["Miami", "Miami-Dade", "Florida"], "International Business",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Pop culture"]],
    
    [29, "Natalie Price", ["Phoenix", "Maricopa", "Arizona"], "Economics (VSB)",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Traveling", "Reading", "Comedy movies"]],
    
    [30, "Hannah Long", ["Charlotte", "Mecklenburg", "North Carolina"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Baking", "Reality TV"]],
    
    [31, "Leah Foster", ["Dallas", "Dallas", "Texas"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Coffee", "Hip Hop Music"]],
    
    [32, "Zara Sanders", ["Detroit", "Wayne", "Michigan"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Reading", "Fashion", "Thrifting"]],
    
    [33, "Audrey Brooks", ["Minneapolis", "Hennepin", "Minnesota"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Comedy movies"]],
    
    [34, "Stella Wood", ["San Diego", "San Diego", "California"], "Computer Science",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Dancing", "Pop culture"]],
    
    [35, "Violet Bennett", ["Portland", "Multnomah", "Oregon"], "Psychology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Fashion", "Cooking", "Reality TV"]],
    
    [36, "Savannah Brooks", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Mechanical Engineering",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Reading", "Baking", "Hip Hop Music"]],
    
    [37, "Hazel Sanders", ["Chicago", "Cook", "Illinois"], "Business Analytics",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Traveling", "Fashion", "Comedy movies"]],
    
    [38, "Autumn Price", ["Denver", "Denver", "Colorado"], "Computer Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Dancing", "Crafting", "Pop culture"]],
    
    [39, "Nevaeh Taylor", ["Houston", "Harris", "Texas"], "Marketing",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Thrifting"]],
    
    [40, "Serenity Davis", ["San Francisco", "San Francisco", "California"], "International Business",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Reading", "Hip Hop Music"]],
    
    [41, "Isabel Green", ["Seattle", "King", "Washington"], "Economics (VSB)",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Coffee", "Reality TV"]],
    
    [42, "Caroline Martinez", ["Atlanta", "Fulton", "Georgia"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Photography", "Comedy movies"]],
    
    [43, "Hailey Hernandez", ["Miami", "Miami-Dade", "Florida"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Fashion", "Pop culture"]],
    
    [44, "Nova Diaz", ["Phoenix", "Maricopa", "Arizona"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Reading", "Thrifting"]],
    
    [45, "Ruby Patel", ["Charlotte", "Mecklenburg", "North Carolina"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Reality TV"]],
    
    [46, "Jasmine Garcia", ["Dallas", "Dallas", "Texas"], "Computer Science",
     ["NovaDance", "Club Softball", "NovaDance"], ["Dancing", "Coffee", "Hip Hop Music"]],
    
    [47, "Summer Wright", ["Detroit", "Wayne", "Michigan"], "Psychology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Fashion", "Crafting", "Comedy movies"]],
    
    [48, "Emery Lewis", ["Minneapolis", "Hennepin", "Minnesota"], "Marketing",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Traveling", "Baking", "Pop culture"]],
    
    [49, "Athena Carter", ["San Diego", "San Diego", "California"], "Civil Engineering",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Reading", "Dancing", "Reality TV"]],
    
    [50, "Liliana Martin", ["Portland", "Multnomah", "Oregon"], "Electrical Engineering",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Coffee", "Fashion", "Hip Hop Music"]],
      
    [51, "Makayla Thompson", ["Philadelphia", "Philadelphia", "Pennsylvania"], "History",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Traveling", "Photography", "Comedy movies"]],
    
    [52, "Eliza Allen", ["Chicago", "Cook", "Illinois"], "Computer Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Baking", "Reading", "Pop culture"]],
    
    [53, "Angelina Young", ["Denver", "Denver", "Colorado"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Coffee", "Fashion", "Reality TV"]],
    
    [54, "Daniela Hernandez", ["Houston", "Harris", "Texas"], "Finance",
     ["NovaDance", "Club Softball", "NovaDance"], ["Running", "Dancing", "Comedy movies"]],
    
    [55, "Ariana Flores", ["San Francisco", "San Francisco", "California"], "Marketing",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Traveling", "Photography", "Hip Hop Music"]],
    
    [56, "Kaylee Nelson", ["Seattle", "King", "Washington"], "Mechanical Engineering",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Baking", "Dancing", "Pop culture"]],
    
    [57, "Ruby Gomez", ["Atlanta", "Fulton", "Georgia"], "International Business",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Reading", "Coffee", "Reality TV"]],
    
    [58, "Alyssa Baker", ["Miami", "Miami-Dade", "Florida"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Traveling", "Photography", "Comedy movies"]],
    
    [59, "Morgan Adams", ["Phoenix", "Maricopa", "Arizona"], "Economics (VSB)",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Coffee", "Pop culture"]],
    
    [ "Jade Parker", ["Charlotte", "Mecklenburg", "North Carolina"], "Psychology",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Reading", "Photography", "Reality TV"]]
]



sample_members = [
    [ "Emma Johnson", ["Austin", "Travis", "Texas"], "Political Science",
     ["SGA", "NovaDance", "ROTC"], ["Reading", "Photography", "Gardening"]],
    
    ["Olivia Smith", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Psychology",
     ["NovaDance", "Club Volleyball", "Rays of Sunshine"], ["Dancing", "Crafting", "Reality TV"]],
    
    [ "Ava Brown", ["Chicago", "Cook", "Illinois"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Cooking", "Fashion", "Comedy movies"]],
    
    [ "Isabella Jones", ["Denver", "Denver", "Colorado"], "Business Analytics",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Yoga/Pilates", "Painting", "Hip Hop Music"]],
    
    ["Sophia Davis", ["Houston", "Harris", "Texas"], "Computer Engineering",
     ["NovaDance", "Dance Groups", "NovaDance"], ["Running", "Reading", "Comedy movies"]],
    
    ["Mia Miller", ["San Francisco", "San Francisco", "California"], "Management",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Coffee", "Reality TV"]],
    
    ["Charlotte Wilson", ["Seattle", "King", "Washington"], "Mechanical Engineering",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Baking", "Horror movies"]],
    
    ["Amelia Moore", ["Atlanta", "Fulton", "Georgia"], "Marketing",
     ["NovaDance", "Club Softball", "NovaDance"], ["Fashion", "Crafting", "Thrifting"]],
    
    ["Harper Taylor", ["Miami", "Miami-Dade", "Florida"], "International Business",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Pop culture"]],
    
    ["Evelyn Anderson", ["Phoenix", "Maricopa", "Arizona"], "Economics (VSB)",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Traveling", "Reading", "Comedy movies"]],
    
    ["Abigail Thomas", ["Charlotte", "Mecklenburg", "North Carolina"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Baking", "Reality TV"]],
    
    ["Emily Jackson", ["Dallas", "Dallas", "Texas"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Coffee", "Hip Hop Music"]],
    
    ["Elizabeth White", ["Detroit", "Wayne", "Michigan"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Reading", "Fashion", "Thrifting"]],
    
    ["Mila Garcia", ["Minneapolis", "Hennepin", "Minnesota"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Comedy movies"]],
    
    ["Avery Martinez", ["San Diego", "San Diego", "California"], "Computer Science",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Dancing", "Pop culture"]],
    
    ["Nova Walker", ["Portland", "Multnomah", "Oregon"], "Psychology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Fashion", "Cooking", "Reality TV"]],
    
    ["Luna Perez", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Mechanical Engineering",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Reading", "Baking", "Hip Hop Music"]],
    
    ["Layla Evans", ["Chicago", "Cook", "Illinois"], "Business Analytics",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Traveling", "Fashion", "Comedy movies"]],
    
    ["Zara Rodriguez", ["Denver", "Denver", "Colorado"], "Computer Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Dancing", "Crafting", "Pop culture"]],
    
    ["Mila King", ["Houston", "Harris", "Texas"], "Marketing",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Thrifting"]],
    
    ["Aurora Perez", ["San Francisco", "San Francisco", "California"], "International Business",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Reading", "Hip Hop Music"]],
    
    ["Natalie Gonzalez", ["Seattle", "King", "Washington"], "Economics (VSB)",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Coffee", "Reality TV"]],
    
    ["Hannah Hernandez", ["Atlanta", "Fulton", "Georgia"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Photography", "Comedy movies"]],
    
    ["Leah Fisher", ["Miami", "Miami-Dade", "Florida"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Fashion", "Pop culture"]],
    
    ["Zoe Matthews", ["Phoenix", "Maricopa", "Arizona"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Reading", "Thrifting"]],
    
    ["Mila Patel", ["Charlotte", "Mecklenburg", "North Carolina"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Reality TV"]],
    
    ["Avery Collins", ["Las Vegas", "Clark", "Nevada"], "Computer Science",
     ["NovaDance", "Club Swim", "STEM organizations"], ["Traveling", "Concerts", "The beach"]],
    
    ["Nova Bell", ["Austin", "Travis", "Texas"], "Political Science",
     ["SGA", "NovaDance", "ROTC"], ["Reading", "Photography", "Gardening"]],
    
    ["Luna Cooper", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Psychology",
     ["NovaDance", "Club Volleyball", "Rays of Sunshine"], ["Dancing", "Crafting", "Reality TV"]],
    
    ["Layla Richardson", ["Chicago", "Cook", "Illinois"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Cooking", "Fashion", "Comedy movies"]],
    
    ["Zara Cox", ["Denver", "Denver", "Colorado"], "Business Analytics",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Yoga/Pilates", "Painting", "Hip Hop Music"]],
    
    ["Mila Stewart", ["Houston", "Harris", "Texas"], "Computer Engineering",
     ["NovaDance", "Dance Groups", "NovaDance"], ["Running", "Reading", "Comedy movies"]],
    
    ["Aurora Rivera", ["San Francisco", "San Francisco", "California"], "Management",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Coffee", "Reality TV"]],
    
    ["Natalie Bailey", ["Seattle", "King", "Washington"], "Mechanical Engineering",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Baking", "Horror movies"]],
    
    ["Hannah Cox", ["Atlanta", "Fulton", "Georgia"], "Marketing",
     ["NovaDance", "Club Softball", "NovaDance"], ["Fashion", "Crafting", "Thrifting"]],
    
    ["Leah Ramirez", ["Miami", "Miami-Dade", "Florida"], "International Business",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Pop culture"]],
    
    ["Zoe Kelly", ["Phoenix", "Maricopa", "Arizona"], "Economics (VSB)",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Traveling", "Reading", "Comedy movies"]],
    
    ["Mila Howard", ["Charlotte", "Mecklenburg", "North Carolina"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Baking", "Reality TV"]],
    
    ["Avery Ross", ["Dallas", "Dallas", "Texas"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Coffee", "Hip Hop Music"]],
    
    ["Nova Carter", ["Detroit", "Wayne", "Michigan"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Reading", "Fashion", "Thrifting"]],
    
    ["Luna Phillips", ["Minneapolis", "Hennepin", "Minnesota"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Comedy movies"]],
    
    ["Layla Evans", ["San Diego", "San Diego", "California"], "Computer Science",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Dancing", "Pop culture"]],
    
    ["Zara Wood", ["Portland", "Multnomah", "Oregon"], "Psychology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Fashion", "Cooking", "Reality TV"]],
    
    ["Mila Watson", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Mechanical Engineering",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Reading", "Baking", "Hip Hop Music"]],
    
    ["Aurora Price", ["Chicago", "Cook", "Illinois"], "Business Analytics",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Traveling", "Fashion", "Comedy movies"]],
    
    ["Natalie Nelson", ["Denver", "Denver", "Colorado"], "Computer Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Dancing", "Crafting", "Pop culture"]],
    
    ["Hannah Hernandez", ["Houston", "Harris", "Texas"], "Marketing",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Thrifting"]],
    
    ["Leah Diaz", ["San Francisco", "San Francisco", "California"], "International Business",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Reading", "Hip Hop Music"]],
    
    ["Zoe Patel", ["Seattle", "King", "Washington"], "Economics (VSB)",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Coffee", "Reality TV"]],
    
    ["Mila King", ["Atlanta", "Fulton", "Georgia"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Photography", "Comedy movies"]],
    
    ["Aurora Garcia", ["Miami", "Miami-Dade", "Florida"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Fashion", "Pop culture"]],
    
    ["Natalie Martinez", ["Phoenix", "Maricopa", "Arizona"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Reading", "Thrifting"]],
    
    ["Hannah Bell", ["Charlotte", "Mecklenburg", "North Carolina"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Reality TV"]],
    
    ["Leah Rodriguez", ["Las Vegas", "Clark", "Nevada"], "Computer Science",
     ["NovaDance", "Club Swim", "STEM organizations"], ["Traveling", "Concerts", "The beach"]],
    
    ["Zoe Gomez", ["Austin", "Travis", "Texas"], "Political Science",
     ["SGA", "NovaDance", "ROTC"], ["Reading", "Photography", "Gardening"]],
    
    ["Mila Carter", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Psychology",
     ["NovaDance", "Club Volleyball", "Rays of Sunshine"], ["Dancing", "Crafting", "Reality TV"]],
    
    ["Aurora Diaz", ["Chicago", "Cook", "Illinois"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Cooking", "Fashion", "Comedy movies"]],
    
    ["Natalie Gomez", ["Denver", "Denver", "Colorado"], "Business Analytics",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Yoga/Pilates", "Painting", "Hip Hop Music"]],
    
    ["Hannah Brooks", ["Houston", "Harris", "Texas"], "Computer Engineering",
     ["NovaDance", "Dance Groups", "NovaDance"], ["Running", "Reading", "Comedy movies"]],
    
    ["Leah Phillips", ["San Francisco", "San Francisco", "California"], "Management",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Coffee", "Reality TV"]],
    
    ["Zoe Howard", ["Seattle", "King", "Washington"], "Mechanical Engineering",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Baking", "Horror movies"]],
    
    ["Mila Cox", ["Atlanta", "Fulton", "Georgia"], "Marketing",
     ["NovaDance", "Club Softball", "NovaDance"], ["Fashion", "Crafting", "Thrifting"]],
    
    ["Aurora Kelly", ["Miami", "Miami-Dade", "Florida"], "International Business",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Pop culture"]],
    
    ["Natalie Wood", ["Phoenix", "Maricopa", "Arizona"], "Economics (VSB)",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Traveling", "Reading", "Comedy movies"]],
    
    ["Hannah Bell", ["Charlotte", "Mecklenburg", "North Carolina"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Baking", "Reality TV"]],
    
    ["Leah Garcia", ["Dallas", "Dallas", "Texas"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Coffee", "Hip Hop Music"]],
    
    ["Zoe Parker", ["Detroit", "Wayne", "Michigan"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Reading", "Fashion", "Thrifting"]],
    
    ["Mila Collins", ["Minneapolis", "Hennepin", "Minnesota"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Comedy movies"]],
    
    ["Aurora Stewart", ["San Diego", "San Diego", "California"], "Computer Science",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Dancing", "Pop culture"]],
    
    ["Natalie Watson", ["Portland", "Multnomah", "Oregon"], "Psychology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Fashion", "Cooking", "Reality TV"]],
    
    ["Hannah Morris", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Mechanical Engineering",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Reading", "Baking", "Hip Hop Music"]],
    
    ["Leah Price", ["Chicago", "Cook", "Illinois"], "Business Analytics",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Traveling", "Fashion", "Comedy movies"]],
    
    ["Zoe Nelson", ["Denver", "Denver", "Colorado"], "Computer Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Dancing", "Crafting", "Pop culture"]],
    
    ["Mila Ramirez", ["Houston", "Harris", "Texas"], "Marketing",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Thrifting"]],
    
    ["Aurora Diaz", ["San Francisco", "San Francisco", "California"], "International Business",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Reading", "Hip Hop Music"]],
    
    ["Natalie Patel", ["Seattle", "King", "Washington"], "Economics (VSB)",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Coffee", "Reality TV"]],
    
    ["Hannah King", ["Atlanta", "Fulton", "Georgia"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Photography", "Comedy movies"]],
    
    ["Leah Garcia", ["Miami", "Miami-Dade", "Florida"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Fashion", "Pop culture"]],
    
    ["Zoe Martinez", ["Phoenix", "Maricopa", "Arizona"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Reading", "Thrifting"]],
    
    ["Mila Howard", ["Charlotte", "Mecklenburg", "North Carolina"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Reality TV"]],
    
    ["Aurora Ross", ["Las Vegas", "Clark", "Nevada"], "Computer Science",
     ["NovaDance", "Club Swim", "STEM organizations"], ["Traveling", "Concerts", "The beach"]],
    
    ["Natalie Bell", ["Austin", "Travis", "Texas"], "Political Science",
     ["SGA", "NovaDance", "ROTC"], ["Reading", "Photography", "Gardening"]],
    
    ["Hannah Cooper", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Psychology",
     ["NovaDance", "Club Volleyball", "Rays of Sunshine"], ["Dancing", "Crafting", "Reality TV"]],
    
    ["Leah Richardson", ["Chicago", "Cook", "Illinois"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Cooking", "Fashion", "Comedy movies"]],
    
    ["Zoe Cox", ["Denver", "Denver", "Colorado"], "Business Analytics",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Yoga/Pilates", "Painting", "Hip Hop Music"]],
    
    ["Mila Stewart", ["Houston", "Harris", "Texas"], "Computer Engineering",
     ["NovaDance", "Dance Groups", "NovaDance"], ["Running", "Reading", "Comedy movies"]],
    
    ["Aurora Rivera", ["San Francisco", "San Francisco", "California"], "Management",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Coffee", "Reality TV"]],
    
    ["Natalie Bailey", ["Seattle", "King", "Washington"], "Mechanical Engineering",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Baking", "Horror movies"]],
    
    ["Hannah Cox", ["Atlanta", "Fulton", "Georgia"], "Marketing",
     ["NovaDance", "Club Softball", "NovaDance"], ["Fashion", "Crafting", "Thrifting"]],
    
    ["Leah Phillips", ["Miami", "Miami-Dade", "Florida"], "International Business",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Pop culture"]],
    
    ["Zoe Kelly", ["Phoenix", "Maricopa", "Arizona"], "Economics (VSB)",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Traveling", "Reading", "Comedy movies"]],
    
    ["Mila Howard", ["Charlotte", "Mecklenburg", "North Carolina"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Baking", "Reality TV"]],
    
    ["Aurora Ross", ["Dallas", "Dallas", "Texas"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Coffee", "Hip Hop Music"]],
    
    ["Natalie Carter", ["Detroit", "Wayne", "Michigan"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Reading", "Fashion", "Thrifting"]],
    
    ["Hannah Phillips", ["Minneapolis", "Hennepin", "Minnesota"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Comedy movies"]],
    
    ["Leah Stewart", ["San Diego", "San Diego", "California"], "Computer Science",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Dancing", "Pop culture"]],
    
    ["Zoe Watson", ["Portland", "Multnomah", "Oregon"], "Psychology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Fashion", "Cooking", "Reality TV"]],
    
    ["Mila Morris", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Mechanical Engineering",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Reading", "Baking", "Hip Hop Music"]],
    
    ["Aurora Price", ["Chicago", "Cook", "Illinois"], "Business Analytics",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Traveling", "Fashion", "Comedy movies"]],
    
    ["Natalie Nelson", ["Denver", "Denver", "Colorado"], "Computer Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Dancing", "Crafting", "Pop culture"]],
    
    ["Hannah Martinez", ["Houston", "Harris", "Texas"], "Marketing",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Thrifting"]],
    
    ["Leah Diaz", ["San Francisco", "San Francisco", "California"], "International Business",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Reading", "Hip Hop Music"]],
    
    ["Zoe Patel", ["Seattle", "King", "Washington"], "Economics (VSB)",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Coffee", "Reality TV"]],
    
    ["Mila King", ["Atlanta", "Fulton", "Georgia"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Photography", "Comedy movies"]],
    
    ["Aurora Garcia", ["Miami", "Miami-Dade", "Florida"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Fashion", "Pop culture"]],
    
    ["Natalie Martinez", ["Phoenix", "Maricopa", "Arizona"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Reading", "Thrifting"]],
    
    ["Hannah Bell", ["Charlotte", "Mecklenburg", "North Carolina"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Reality TV"]],
    
    ["Leah Rodriguez", ["Las Vegas", "Clark", "Nevada"], "Computer Science",
     ["NovaDance", "Club Swim", "STEM organizations"], ["Traveling", "Concerts", "The beach"]],
    
    ["Zoe Gomez", ["Austin", "Travis", "Texas"], "Political Science",
     ["SGA", "NovaDance", "ROTC"], ["Reading", "Photography", "Gardening"]],
    
    ["Mila Carter", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Psychology",
     ["NovaDance", "Club Volleyball", "Rays of Sunshine"], ["Dancing", "Crafting", "Reality TV"]],
    
    ["Aurora Diaz", ["Chicago", "Cook", "Illinois"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Cooking", "Fashion", "Comedy movies"]],
    
    ["Natalie Gomez", ["Denver", "Denver", "Colorado"], "Business Analytics",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Yoga/Pilates", "Painting", "Hip Hop Music"]],
    
    ["Hannah Brooks", ["Houston", "Harris", "Texas"], "Computer Engineering",
     ["NovaDance", "Dance Groups", "NovaDance"], ["Running", "Reading", "Comedy movies"]],
    
    ["Leah Phillips", ["San Francisco", "San Francisco", "California"], "Management",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Coffee", "Reality TV"]],
    
    ["Zoe Howard", ["Seattle", "King", "Washington"], "Mechanical Engineering",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Baking", "Horror movies"]],
    
    ["Mila Cox", ["Atlanta", "Fulton", "Georgia"], "Marketing",
     ["NovaDance", "Club Softball", "NovaDance"], ["Fashion", "Crafting", "Thrifting"]],
    
    ["Aurora Kelly", ["Miami", "Miami-Dade", "Florida"], "International Business",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Pop culture"]],
    
    ["Natalie Wood", ["Phoenix", "Maricopa", "Arizona"], "Economics (VSB)",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Traveling", "Reading", "Comedy movies"]],
    
    ["Hannah Bell", ["Charlotte", "Mecklenburg", "North Carolina"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Baking", "Reality TV"]],
    
    ["Leah Garcia", ["Dallas", "Dallas", "Texas"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Coffee", "Hip Hop Music"]],
    
    ["Zoe Parker", ["Detroit", "Wayne", "Michigan"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Reading", "Fashion", "Thrifting"]],
    
    ["Mila Collins", ["Minneapolis", "Hennepin", "Minnesota"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Comedy movies"]],
    
    ["Aurora Stewart", ["San Diego", "San Diego", "California"], "Computer Science",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Dancing", "Pop culture"]],
    
    ["Natalie Watson", ["Portland", "Multnomah", "Oregon"], "Psychology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Fashion", "Cooking", "Reality TV"]],
    
    ["Hannah Morris", ["Philadelphia", "Philadelphia", "Pennsylvania"], "Mechanical Engineering",
     ["NovaDance", "Club Volleyball", "NovaDance"], ["Reading", "Baking", "Hip Hop Music"]],
    
    ["Leah Price", ["Chicago", "Cook", "Illinois"], "Business Analytics",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Traveling", "Fashion", "Comedy movies"]],
    
    ["Zoe Nelson", ["Denver", "Denver", "Colorado"], "Computer Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Dancing", "Crafting", "Pop culture"]],
    
    ["Mila Ramirez", ["Houston", "Harris", "Texas"], "Marketing",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Yoga/Pilates", "Photography", "Thrifting"]],
    
    ["Aurora Diaz", ["San Francisco", "San Francisco", "California"], "International Business",
     ["NovaDance", "Club Softball", "NovaDance"], ["Traveling", "Reading", "Hip Hop Music"]],
    
    ["Natalie Patel", ["Seattle", "King", "Washington"], "Economics (VSB)",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Coffee", "Reality TV"]],
    
    ["Hannah King", ["Atlanta", "Fulton", "Georgia"], "Accounting",
     ["NovaDance", "Club Basketball", "NovaDance"], ["Running", "Photography", "Comedy movies"]],
    
    ["Leah Garcia", ["Miami", "Miami-Dade", "Florida"], "Biology",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Dancing", "Fashion", "Pop culture"]],
    
    ["Zoe Martinez", ["Phoenix", "Maricopa", "Arizona"], "Chemical Engineering",
     ["NovaDance", "Club Soccer", "NovaDance"], ["Traveling", "Reading", "Thrifting"]],
    
    ["Mila Howard", ["Charlotte", "Mecklenburg", "North Carolina"], "Finance",
     ["NovaDance", "Intramural Sports", "NovaDance"], ["Baking", "Photography", "Reality TV"]],
    
    ["Aurora Ross", ["Las Vegas", "Clark", "Nevada"], "Computer Science",
     ["NovaDance", "Club Swim", "STEM organizations"], ["Traveling", "Concerts", "The beach"]],
    
    ["Natalie Bell", ["Austin", "Travis", "Texas"], "Political Science",
     ["SGA", "NovaDance", "ROTC"], ["Reading", "Photography", "Gardening"]],
    
]
print("hi")
print("Number of elements in the list:", len(sample_members))


## List of #600 
## 1 - 200 are 


## PNMS 1 - 200 are numbers nad names round 1 



