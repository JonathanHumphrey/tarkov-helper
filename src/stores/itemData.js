import { defineStore } from "pinia";

export const useStore = defineStore({
	id: "data",
	state: () => ({
		ammo: {
			akRifle: [],
			akAssault: [],
			akSubRifle: [],
			arAssault: []
		},
		items: [],
		baselineValues: {
			"SSD drive": 34994,
			"Secured magnetic tape cassette": 63264,
			Diary: 25334,
			"Slim diary": 31008,
			"SAS drive": 40128,
		},
		selectedCaliber: []
	}),
	getters: {
		
	},
	actions: {
		testFunction() {
			console.log(this.ammo['76239'])
		},
		async ammoData(){
			console.log("Fetching Ammo...")
			await fetch('https://api.tarkov.dev/graphql', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				  'Accept': 'application/json',
				},
				body: JSON.stringify({query: `{
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
			  }`})
			  })
				.then(r => r.json())
				.then((data) => {
					//console.log(data.data.ammo)
					for(let i = 0; i < 157; i++){
						//console.log(data.data.ammo[i])
						if(data.data.ammo[i].caliber === "Caliber556x45NATO"){
							this.ammo.arAssault.push(data.data.ammo[i])
						}
						else if(data.data.ammo[i].caliber === "Caliber762x54R"){
							this.ammo.akRifle.push(data.data.ammo[i])
						}
						else if(data.data.ammo[i].caliber === "Caliber762x39"){
							this.ammo.akAssault.push(data.data.ammo[i])
						}
						else if(data.data.ammo[i].caliber === "Caliber545x39"){
							this.ammo.akSubRifle.push(data.data.ammo[i])
						}
						
					}
					for(let item in this.ammo){
						console.log(item)
					}
					console.log("Ammo complete")
				})
		},
		async getItemData() {
			console.log("Fetching Items...")
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
            items(name: "SSD") {
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
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 34994,
					};
					if (this.items.length === 0) {
						this.items.push(blob);
					}
				});

			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
                items(name: "SMT") {
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
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 63264,
					};
					this.items.push(blob);
				});
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
                    items(name: "Diary") {
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
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 25334,
					};
					this.items.push(blob);
				});
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
                    items(name: "sdiary") {
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
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 31008,
					};
					this.items.push(blob);
				});
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
                items(name: "SAS") {
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
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 40128,
					};

					this.items.push(blob);
 				});
		},
	},
});
