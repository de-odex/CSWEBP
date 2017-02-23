// VERSION 0.0.1
// UNDER GPL V3 LICENSE
// Check my github: https://github.com/de-odex



	
class entity{
	constructor(health, medpak, nrgpak, atk1, atk2, atk3, atk4) {
		this.health = health;
		this.medpak = medpak;
		this.nrgpak = nrgpak;
		this.atk1 = atk1;
		this.atk2 = atk2;
		this.atk3 = atk3;
		this.atk4 = atk4;
	}
	
}

class controlled extends entity{
	constructor(health, medpak, nrgpak, atk1, atk2, atk3, atk4, money, bank, kills, xp, level, xplevelup) {
		super(health, medpak, nrgpak, atk1, atk2, atk3, atk4);
		this.money = money;
		this.bank = bank;
		this.kills = kills;
		this.xp = xp;
		this.level = level;
		this.xplevelup = xplevelup;
	}
	
}
	
// game
function game(){
	print("Attack")
	print("Instructions: fight the enemy until you or he dies.")
	print("This game autosaves. Do not close the game if you don't see <>.")
	print("Version " + str(version))
	done = False
	global dollas
	global turn
	global bank
	global kills
	global xp
	global lvl
	global xplevel
	const player = new controlled(100, 5, 3, 10, 30, 30, 5);
	const enemy = new entity(100, 5, 3, 10, 30, 30, 5);
	lvl = 0
	dollas = 0
	turn = 1
	bank = 0
	kills = 0
	xp = 0
	xplevel = 50
	healthmod = 25 * int(lvl)
	health = health + healthmod
	if health > 100 + healthmod:
		health = 100 + healthmod
		enemy = 100
	if attack1 > 10 or attack2 > 30 or attack3 > 30 or attack4 > 5:
		attack1 = 10
		attack2 = 30
		attack3 = 30
		attack4 = 5
		ai_attack1 = 10
		ai_attack2 = 30
		ai_attack3 = 30
		ai_attack4 = 5
	while not done:
		while health > 0 and enemy > 0:
			while turn == 1:
				random_number = random.randint(1, 100)
				enter()
				clr()
				if xp >= xplevel:
					lvl = lvl + 1
					xp = xp - xplevel
					pass
					pass
					pass
					xplevel = xplevel + 35 + (5 * lvl)
				print("Hi! Stats:")
				print("Your health is: {:2}".format(health))
				print("The enemy's health is: {:2}".format(enemy))
				print("You're at level {:}".format(lvl))
				print("You have {:}/{:} xp".format(xp, xplevel))
				percent = xp / xplevel
				percent = round(percent, 3)
				percent = percent * 100
				if percent > 90:
					print("<---------|>")
				elif percent > 80 and percent <= 90:
					print("<--------|->")
				elif percent > 70 and percent <= 80:
					print("<-------|-->")
				elif percent > 60 and percent <= 70:
					print("<------|--->")
				elif percent > 50 and percent <= 60:
					print("<-----|---->")
				elif percent > 40 and percent <= 50:
					print("<----|----->")
				elif percent > 30 and percent <= 40:
					print("<---|------>")
				elif percent > 20 and percent <= 30:
					print("<--|------->")
				elif percent > 10 and percent <= 20:
					print("<-|-------->")
				elif percent > 0 and percent <= 10:
					print("<|--------->")
				print("You have {:} dollars".format(dollas))
				print("You have {:} dollars in your bank".format(bank))
				print("You have {:2} medpacks".format(med))
				print("You have {:2} NRG drinks".format(nrg))
				print("You have {:2} energy for attack 1".format(attack1))
				print("You have {:2} energy for attack 2".format(attack2))
				print("You have {:2} energy for attack 3".format(attack3))
				print("You have {:2} energy for attack 4".format(attack4))
				print("You killed {:} people".format(kills))
				saveall()
				print("<>")
				input_number = input("Attack, use items, buy, or exit (1, 2, 3, or 4 respectively): ")
				try:
					input_number = int(input_number)
				except ValueError:
					clr()
					print("Number please!")
				if input_number == 1:
					clr()
					print("What attack would you want to use? (any other number to go back) ")
					print("1: Backup attack -- Uses: " + str(attack1))
					print("2: Hard-hitting -- Uses: " + str(attack2))
					print("3: Normal -- Uses: " + str(attack3))
					print("4: Special -- Uses: " + str(attack4))
					attack_number = input(" > ")
					try:
						attack_number = int(attack_number)
					except ValueError:
						clr()
						print("Number please!")
					if attack_number == 1 and attack1 < 1:
						print("No more uses!")
					elif attack_number == 2 and attack2 < 1:
						print("No more uses!")
					elif attack_number == 3 and attack3 < 1:
						print("No more uses!")
					elif attack_number == 4 and attack4 < 1:
						print("No more uses!")
					elif attack_number == 1 and attack1 >= 1:
						clr()
						if random_number < 80 and random_number >= 1:
							print("You hit him with your backup attack!")
							enemy = enemy - 5
							print("It caused 5 damage!")
							attack1 -= 1
							turn = 0
						elif random_number >= 80:
							print("You missed!")
							attack1 -= 1
							turn = 0
					elif attack_number == 2 and attack2 >= 1:
						clr()
						if random_number < 40 and random_number >= 1:
							hhit_attack = random.randint(35, 50)
							print("You hit him with your hard-hitting attack!")
							enemy = enemy - hhit_attack
							print("It caused " + str(hhit_attack) + " damage!")
							attack2 -= 1
							turn = 0
						elif random_number >= 40:
							print("You missed!")
							attack2 -= 1
							turn = 0
					elif attack_number == 3 and attack3 >= 1:
						clr()
						if random_number < 60 and random_number >= 1:
							nrm_attack = random.randint(10, 20)
							print("You hit him with your normal attack!")
							enemy = enemy - nrm_attack
							print("It caused " + str(nrm_attack) + " damage!")
							attack3 -= 1
							turn = 0
						elif random_number >= 60:
							print("You missed!")
							attack3 -= 1
							turn = 0
					elif attack_number == 4 and attack4 >= 1:
						clr()
						if random_number < 20 and random_number >= 1:
							spcl_attack = random.randint(60, 75)
							print("You hit him with your special attack!")
							enemy = enemy - spcl_attack
							print("It caused " + str(spcl_attack) + " damage!")
							attack4 -= 1
							turn = 0
						elif random_number >= 20:
							print("You missed!")
							attack4 -= 1
							turn = 0
				elif input_number == 2:
					clr()
					print("What item will you use? (any other number to go back)")
					print("1. NRG drink (energy)")
					print("2. Medpack")
					item_number = input(" > ")
					try:
						item_number = int(item_number)
					except ValueError:
						clr()
						print("Number please!")
					if item_number == 1:
						clr()
						print("You tried to drink an NRG drink!")
						if random_number <= 60 and random_number >= 1 and nrg > 0:
							print("You restored your energy!")
							attack1 = 10
							attack2 = 30
							attack3 = 30
							attack4 = 5
							nrg -= 1
							turn = 0
						elif random_number > 60 or nrg <= 0 or attack1 == 10 or attack2 == 30 or attack3 == 30 or attack4 == 10:
							print("You failed to drink an NRG drink!")
							turn = 0
					elif item_number == 2:
						clr()
						print("You tried to heal!")
						if random_number <= 80 and random_number >= 1 and health < 100 + healthmod and med > 0:
							print("You healed up!")
							health += 25
							med -= 1
							print("You have " + str(med) + " more medpacks")
							turn = 0
						elif random_number > 80 or med <= 0 or health >= 100 + healthmod:
							print("You failed to heal!")
							print("You have " + str(med) + " more medpacks")
							turn = 0
				elif input_number == 3:
					clr()
					print("Buy what? (any other number to go back)")
					print("1. NRG drink (energy): 50 dollars")
					print("2. Medpack: 50 dollars")
					print("3. Full heal: 250 dollars")
					buy_number = input(" > ")
					try:
						buy_number = int(buy_number)
					except ValueError:
						clr()
						print("Number please!")
					if buy_number == 1:
						nrg_price = 50
						nrg_num = input("How many?: ")
						try:
							nrg_num = int(nrg_num)
						except ValueError:
							clr()
							print("Number please!")
						if nrg_price * nrg_num > dollas:
							print("Not enough money!")
						elif nrg_price * nrg_num <= dollas:
							dollas = dollas - (nrg_price * nrg_num)
							nrg = nrg + nrg_num
					elif buy_number == 2:
						med_price = 50
						med_num = input("How many?: ")
						try:
							med_num = int(med_num)
						except ValueError:
							clr()
							print("Number please!")
						if med_price * med_num > dollas:
							print("Not enough money!")
						elif med_price * med_num <= dollas:
							dollas = dollas - (med_price * med_num)
							med = med + med_num
					elif buy_number == 3:
						heal_price = 250
						if heal_price > dollas:
							print("Not enough money!")
						elif heal_price <= dollas:
							dollas = dollas - heal_price
							health = 100 + healthmod
							print("You used a full heal!")
						turn = 0
				elif input_number == 4:
					clr()
					print("Bye!")
					enter()
					sys.exit()

			while turn == 0:
				ai_number = random.randint(1, 2)
				ai_attack = random.randint(1, 4)
				ai_item = random.randint(1, 2)
				event = random.randint(1, 100)
				if ai_number == 1:
					if ai_attack == 1 and ai_attack1 < 1:
						pass
						turn = 0
					elif ai_attack == 2 and ai_attack2 < 1:
						pass
						turn = 0
					elif ai_attack == 3 and ai_attack3 < 1:
						pass
						turn = 0
					elif ai_attack == 4 and ai_attack4 < 1 and enemy > 15:
						pass
						turn = 0
					elif ai_attack == 1 and ai_attack1 >= 1 and ai_attack2 == 0 and ai_attack3 == 0 and ai_attack4 == 0:
						if event < 80 and event >= 1:
							print("He hit you with his backup attack!")
							health = health - 5
							print("It caused 5 damage!")
							ai_attack1 -= 1
							turn = 1
						elif event >= 80:
							print("He missed!")
							ai_attack1 -= 1
							turn = 1
					elif ai_attack == 2 and ai_attack2 >= 1:
						if event < 40 and event >= 1:
							ai_hhit_attack = random.randint(35, 50)
							print("He hit you with his hard-hitting attack!")
							health = health - ai_hhit_attack
							print("It caused " + str(ai_hhit_attack) + " damage!")
							ai_attack2 -= 1
							turn = 1
						elif event >= 40:
							print("He missed!")
							ai_attack2 -= 1
							turn = 1
					elif ai_attack == 3 and ai_attack3 >= 1:
						if event < 60 and event >= 1:
							ai_nrm_attack = random.randint(10, 20)
							print("He hit you with his normal attack!")
							health = health - ai_nrm_attack
							print("It caused " + str(ai_nrm_attack) + " damage!")
							ai_attack3 -= 1
							turn = 1
						elif event >= 60:
							print("He missed!")
							ai_attack3 -= 1
							turn = 1
					elif ai_attack == 4 and ai_attack4 >= 1 and enemy <= 15:
						if event < 20 and event >= 1:
							ai_spcl_attack = random.randint(60, 75)
							print("He hit you with his special attack!")
							health = health - ai_spcl_attack
							print("It caused " + str(ai_spcl_attack) + " damage!")
							ai_attack4 -= 1
							turn = 1
						elif event >= 20:
							print("He missed!")
							ai_attack4 -= 1
							turn = 1
				elif ai_number == 2 and enemy <= 15 and ai_med > 0 and ai_item == 1 and enemy <= 15:
					ai_med -= 1
					enemy += 25
					turn = 1
				elif ai_number == 2 and ai_nrg > 0 and ai_item == 2 and attack1 == 0 and attack2 == 0 and attack3 == 0 and attack4 == 0:
					ai_nrg -= 1
					ai_attack1 = 10
					ai_attack2 = 30
					ai_attack3 = 30
					ai_attack4 = 5
					turn = 1
				elif ai_number == 2:
					pass
					turn = 0
		if health <= 0 and bank >= -500:
			print("You blacked out!")
			print("The hospital healed you back up!")
			health = 100
			enemy = 100
			dollas = 0
			med = 5
			nrg = 3
			attack1 = 10
			attack2 = 30
			attack3 = 30
			attack4 = 5
			ai_attack1 = 10
			ai_attack2 = 30
			ai_attack3 = 30
			ai_attack4 = 5
			ai_nrg = 3
			ai_med = 5
			turn = 1
			bank = bank - 250
			saveall()
			health = health + healthmod
		elif lvl >= 50:
			print("You win!")
			print("Game over!")
			health = 100
			enemy = 100
			dollas = 0
			med = 5
			nrg = 3
			attack1 = 10
			attack2 = 30
			attack3 = 30
			attack4 = 5
			ai_attack1 = 10
			ai_attack2 = 30
			ai_attack3 = 30
			ai_attack4 = 5
			ai_nrg = 3
			ai_med = 5
			turn = 1
			bank = 0
			kills = 0
			xp = 0
			lvl = 0
			xplevel = 50
			amazingfeat = 9001
			saveall()
			save2(amazingfeat)
			end()
		elif enemy <= 0 and health > 0:
			print("You killed him!")
			mons = random.randint(600, 1000)
			xpadd = random.randint(20, 30)
			print("You gained " + str(mons) + " money!")
			print("You gained " + str(xpadd) + " xp!")
			print("Another person approaches you!")
			enemy = 100
			dollas = dollas + mons
			ai_attack1 = 10
			ai_attack2 = 30
			ai_attack3 = 30
			ai_attack4 = 5
			ai_nrg = 3
			ai_med = 5
			turn = 1
			kills = kills + 1
			xp = xp + xpadd
			saveall()
			enter()
			binp = input("Do you want to bank your money? (1/0): ")
			try:
				binp = int(binp)
			except ValueError:
				clr()
				print("Number please!")
				binp = 1
			if binp == 1:
				clr()
				dorw = input("Deposit or withdraw? (1/2): ")
				try:
					dorw = int(dorw)
				except ValueError:
					clr()
					print("Number please!")
					dorw = 1
				if dorw == 1:
					clr()
					print("You have {:} dollars".format(dollas))
					print("You have {:} dollars in your bank".format(bank))
					recdep = dollas - 500
					print("It's recommended to deposit " + str(recdep) + " dollars for full heal use.")
					depamt = input("How much?: ")
					clr()
					try:
						depamt = int(depamt)
					except ValueError:
						depamt = recdep
					if depamt > dollas:
						print("Too much! Depositing all!")
						print("Depositing money...")
						bank = bank + dollas
						bank = bank - 15
						dollas = 0
					else:
						dollas = dollas - depamt
						print("Depositing money...")
						bank = bank + depamt
						bank = bank - 15
				elif dorw == 2:
					clr()
					print("You have {:} dollars".format(dollas))
					print("You have {:} dollars in your bank".format(bank))
					recwth = 500 - dollas
					print("It's recommended to withdraw " + str(recwth) + " dollars for full heal use (if the number's negative disregard)")
					wthamt = input("How much?: ")
					clr()
					try:
						wthamt = int(wthamt)
					except ValueError:
						clr()
						print("Number please!")
					if wthamt > bank:
						print("Too much! Withdrawing all!")
						print("Withdrawing money...")
						dollas = dollas + bank
						bank = 0
					else:
						bank = bank - wthamt
						print("Withdrawing money...")
						dollas = dollas + wthamt
			else:
				print("OK!")
		elif health <= 0 and enemy > 0 and bank < -500:
			print("You died!")
			print("No money!")
			print("Game over!")
			health = 100
			enemy = 100
			dollas = 0
			med = 5
			nrg = 3
			attack1 = 10
			attack2 = 30
			attack3 = 30
			attack4 = 5
			ai_attack1 = 10
			ai_attack2 = 30
			ai_attack3 = 30
			ai_attack4 = 5
			ai_nrg = 3
			ai_med = 5
			turn = 1
			bank = 0
			kills = 0
			xp = 0
			lvl = 0
			xplevel = 50
			saveall()
			end()
}
