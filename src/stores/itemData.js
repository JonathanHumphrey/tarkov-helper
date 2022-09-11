import { defineStore } from "pinia";

export const useStore = defineStore({
	id: "data",
	state: () => ({
		ammo: {
			"762x54": [],
			"762x39": [],
			"545x39": [],
			"556x45": [],
			"9x19PARA": [],
			"12g": [],
			"57x28": [],
			"46x30": [],
			"9x18PM": [],
		},
		items: [],
		baselineValues: {
			"SSD drive": 34994,
			"Secured magnetic tape cassette": 63264,
			Diary: 25334,
			"Slim diary": 31008,
			"SAS drive": 40128,
		},
		selectedCaliber: [],
		filteredList: [],
	}),
	getters: {},
	actions: {
		saveSorted(list) {
			this.filteredList = list;
		},
		async ammoData() {
			console.log("Fetching Ammo...");
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
					ammo {
						item{
						  shortName
						}
						caliber
						penetrationPower
						penetrationChance
						armorDamage
						damage
					  }
			  }`,
				}),
			})
				.then((r) => r.json())
				.then((data) => {

					/* 
						TODO:
							-optimize this initial filtering of the data-set
								issue: the odd formatting of the caliber string could pose an issue

								-could prolly really easily solve this issue with some string manipulation and regex or something alike. 
								- there could also be some more common or readable and consistent value in the graphQL api
					*/

					// Uncomment to add more supported calibers
					//console.log(data.data.ammo);
					for (let i = 0; i < 157; i++) {
						//console.log(data.data.ammo[i])
						if (data.data.ammo[i].caliber === "Caliber556x45NATO") {
							this.ammo["556x45"].push(data.data.ammo[i]);
						} else if (data.data.ammo[i].caliber === "Caliber762x54R") {
							this.ammo["762x54"].push(data.data.ammo[i]);
						} else if (data.data.ammo[i].caliber === "Caliber762x39") {
							this.ammo["762x39"].push(data.data.ammo[i]);
						} else if (data.data.ammo[i].caliber === "Caliber545x39") {
							this.ammo["545x39"].push(data.data.ammo[i]);
						} else if (data.data.ammo[i].caliber === "Caliber9x19PARA") {
							this.ammo["9x19PARA"].push(data.data.ammo[i]);
						} else if (data.data.ammo[i].caliber === "Caliber12g") {
							this.ammo["12g"].push(data.data.ammo[i]);
						} else if (data.data.ammo[i].caliber === "Caliber57x28") {
							this.ammo["57x28"].push(data.data.ammo[i]);
						} else if (data.data.ammo[i].caliber === "Caliber46x30") {
							this.ammo["46x30"].push(data.data.ammo[i]);
						} else if (data.data.ammo[i].caliber === "Caliber9x18PM") {
							this.ammo["9x18PM"].push(data.data.ammo[i]);
						}
					}
					console.log("Ammo complete");
				});
		},
		async getItemData() {
			console.log("Fetching Items...");
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
					items(bsgCategoryId: "5448ecbe4bdc2d60728b4568") {
						name
						sellFor{
						price
						source
						}
						link
						iconLink
						changeLast48hPercent
					}
        	}`,
				}),
			})
				.then((r) => r.json())
				.then((data) => {
					console.log(data)
					for(let item in data.data.items){
						
						let blob = {
							name: data.data.items[item].name,
							iconLink: data.data.items[item].iconLink,
							sellFor: data.data.items[item].sellFor,
							base: (data.data.items[item].sellFor[1].price * 96)
						};
						this.items.push(blob);
					}
				});
		},
	},
});
