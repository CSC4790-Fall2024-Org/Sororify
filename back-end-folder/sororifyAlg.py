# for mata goo and morja
from jsonConvertor import sorted_list_of_PNMs, list_of_members

#temp_list_of_mems = [{'first name': 'Madison', 'last name': 'Stell', 'state': 'Virginia', 'county': 'Arlington', 'hometown': 'Arlington', 'major': ['Economics (CLAS)'], 'involvement': ['NovaDance', 'Special Olympics'], 'activities': ['Running', 'Cooking', 'Jazz Music'], 'Bump Group number': 1}, {'first name': 'Julia', 'last name': 'Foy', 'state': 'New Jersey', 'county': 'Monmouth', 'hometown': 'Middletown', 'major': ['Computer Science'], 'involvement': ['NovaDance', 'Club Softball'], 'activities': ['Cooking', 'Concerts', 'The beach'], 'Bump Group number': 2}, {'first name': 'Madeleine', 'last name': 'Brooks', 'state': 'Rhode Island', 'county': 'Kent', 'hometown': 'East Greenwich', 'major': ['English','Spanish'], 'involvement': ['Villanova Student Musical Theater', 'Acapella'], 'activities': ['Study abroad', 'Self-care', 'Crafting'], 'Bump Group number': 1}, {'first name': 'Francesca', 'last name': 'Raimondi', 'state': 'New York', 'county': 'Nassau', 'hometown': 'Manhasset', 'major': ['Italian', 'Psychology'], 'involvement': ['Club Swimming', 'Special Olympics'], 'activities': ['Weight Lifting', 'Photography', 'Concerts'], 'Bump Group number': 2}]

# sorts the list of members into a dictionary of lists of the members' dictionaries
# keys are bump groups, values are list of member dictionaries
def sort_into_bump_groups(member_list):
    mems_sorted_to_bump_group = {}
    # this may need to be changed depending on how many bump groups are needed
    for i in range(1,21):
        mems_sorted_to_bump_group[i] = []
        for member in member_list:
            if member['Bump Group number'] == i:
                mems_sorted_to_bump_group[i].append(member)
    return mems_sorted_to_bump_group

def calculate_percent(bump_groups, pnms):
    pnm_compatibility = {}
    for pnm in pnms:
        pnm_compatibility[pnm['PNM number']] = []
        for i in range(0, len(bump_groups)):
            pnm_compatibility[pnm['PNM number']].append(0)
        # for each bump group
        for bump_group_number, bump_group_members in bump_groups.items():
            location_total = 0
            major_total = 0
            interests_total = 0
            involvement_total = 0
            bump_group_total = 0

            # for specific member in each bump group
            for member in bump_group_members:
                location_total += location(member, pnm)
                major_total += major(member['major'], pnm['major'])
                interests_total += interests(member['activities'], pnm['activities'])
                involvement_total += involvement(member['involvement'], pnm['involvement'])

            bump_group_total = ((location_total + major_total + interests_total + involvement_total) / (16 * len(bump_group_members))) * 100

            pnm_compatibility[pnm['PNM number']][bump_group_number-1] = round(bump_group_total)

    return pnm_compatibility
            
def location(member, PNM):
    if member['state'] == PNM['state'] and member['county'] == PNM['county'] and member['hometown'] == PNM['hometown']:
        return 5
    elif member['state'] == PNM['state'] and member['county'] == PNM['county']:
        return 5/3 * 2
    elif member['state'] == PNM['state']:
        return 5/3
    else:
        return 0
    
def major(member_majors, PNM_majors):
    for PNM_major in PNM_majors:
        if PNM_major is not None and PNM_major in member_majors:
            return 4
    return 0

def interests(member_ints, PNM_ints):
    score = 0
    for PNM_int in PNM_ints:
        if PNM_int is not None and PNM_int in member_ints:
            score +=1
    return score

def involvement(member_invs, PNM_invs):
    score = 0
    for PNM_inv in PNM_invs:
        if PNM_inv is not None and PNM_inv in member_invs:
            score += 4/3
    return score

def match(pnm_percents):
    final_matches = {}
    for j in range(1,21):
        final_matches[j] = []
    for i in range(100, -1, -1):
        for pnm, percent_list in pnm_percents.items():
            for index, percent in enumerate(percent_list):
                if percent == i:
                    match_index = index + 1
                    if len(final_matches[match_index]) < 5:
                        pct = str(percent) + "%"
                        final_matches[match_index].append({pnm : pct})
                        pnm_percents[pnm] = []
                        break
    return final_matches

def prettyPrint(pnm_percents, sorted_list_of_PNMs):
    for group, pnms in pnm_percents.items():
        print("Bump Group " + str(group) + ": ")
        for pnm in pnms:
            for key, value in pnm.items():
                print(f"PNM {key} {locatePNM(sorted_list_of_PNMs, key)}: {value}")
        print("")

def locatePNM(sorted_list_of_PNMs, number):
    for pnm in sorted_list_of_PNMs:
        if pnm.get('PNM number') == number:
            name = pnm.get('first name') + " " + pnm.get('last name')
            return name

bump_groups = sort_into_bump_groups(list_of_members)

pnm_percents = calculate_percent(bump_groups, sorted_list_of_PNMs)

final_matches = match(pnm_percents)
prettyPrint(final_matches, sorted_list_of_PNMs)