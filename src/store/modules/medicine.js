export default {
    actions: {
        showDrugs(ctx) {
            const medicine = this.medicine
            ctx.commit('updateDrugs', medicine)
        },
    },
    getters: {
        allMedicine(state) {
            return state.medicine.filter((el) => el.count > 0)
        },
        allComments(state) {
            return (med_id) => {
                return state.comments.filter((el) => el.user_id == med_id);
            }
        },
        filterDrugs(state) {
            return (search) => {
                return state.medicine.filter((el) => {
                    return el.medName.toLowerCase().startsWith(search.toLowerCase())
                })
            }
        },
        selectId(state) {
            return (id) => {
                return state.medicine.find((el) => el.id === +id);
            }
        },

    },
    mutations: {
        updateDrugs(state, medicine) {
            state.medicine = medicine
        },
        createDrugs(state, newMedicine) {
            state.medicine.push(newMedicine)
        },
        createComments(state, newComment) {
            state.comments.push(newComment)
            // console.log(state.comments);
        },
        selectDrugs(state, med) {
            med.active = !med.active;
            state.medicine = [...state.medicine]
            if (med.active) {
                state.active.push(med);
            } else {
                state.active.pop(med)
            }
            // console.log(state.active);
        },
        buyDrugs(state) {
            state.medicine.filter(el => {
                if (state.active.includes(el) && el.count >= 0) {
                    el.count--
                    state.bought.push(el)
                }
            })
        }
    },
    state: {
        medicine: [
            {
                id: 1,
                medName: 'Amlodipine',
                price: '2580',
                count: '2',
                selCompany: 'Amgen Inc (US)',
                description: 'Amlodipine is a calcium channel blocker. It affects the movement of calcium into the cells of the heart and blood vessels. This relaxes the blood vessels and lowers blood pressure.'
            },
            {
                id: 2,
                medName: 'Ibuprofen ',
                price: '960',
                count: '3',
                selCompany: 'Bristol-Myers Squibb (US)',
                description: 'oral capsule (200 mg); oral suspension (100 mg/5 mL; 50 mg/1.25 mL); oral tablet (100 mg; 200 mg; 400 mg; 600 mg; 800 mg); oral tablet, chewable (100 mg; 50 mg)'
            },
            {
                id: 3,
                medName: 'Oxymetazoline',
                price: '5480',
                count: '15',
                selCompany: 'Hoffmann-La Roche AG (Switzerland)',
                description: 'Vasoconstrictor; an imidazoline-derivative sympathomimetic amine'
            },
            {
                id: 4,
                medName: 'Amoksacilini',
                price: '2580',
                count: '2',
                selCompany: 'Amgen Inc (US)',
                description: 'Amoxicillin is used to treat bacterial infections in many different parts of the body. It is also used with other medicines to treat H. pylori infection and duodenal ulcers.'
            },
        ],

        comments: [],
        active: [],
        bought: [],
    },

}