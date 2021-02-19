Food	Room temperature such as in a pantry or in a cupboard (50 to 70°F)	Refrigerator at 40°F or below	Freezer at 0°F or below (storage times are for quality only)
Fresh beef, veal, lamb or pork (steaks, chops or roasts)	Not safe	3 to 5 days	4 to 12 months
Ground beef, turkey, veal, pork or lamb, stew meat	Not safe	1 to 2 days	3 to 4 months
Bacon	Not safe	Within 1 week of "Use by" date (unopened); 1 week (opened)	1 month
Bacon, fully cooked and shelf stable	6 months or until the "use-by" date on the package (unopened)	5 to 14 days (opened)	3 months
Sausage, raw from chicken, turkey, pork or beef	Not safe	1 to 2 days	3 to 4 months
Sausage, fully cooked, from chicken, turkey, pork or beef	Not safe	1 week	1 to 2 months
Ham, canned, labeled "Keep Refrigerated"	Not safe	6-9 months (unopened);  3-5 days (opened)	1 to 2 months (opened)
Ham, fully cooked, store-wrapped, slices, half or spiral cut	Not safe	3 to 4 days	1 to 2 months
Ham, fully cooked, store-wrapped, whole	Not safe	1 week	1 to 2 months
Ham, fully cooked, vacuum-sealed at plant	Not safe	"Use by" date if available or 2 weeks (unopened); 3 to 5 days (opened)	1 to 2 months
Hot dogs	Not safe	2 weeks (unopened);
1 week (opened)	1 to 2 months
Lunch meats; sliced at store or deli	Not safe	3 to 5 days	1 to 2 months
Lunch meats; prepackaged	Not safe	2 weeks or "Use by" date (unopened); 3-5 days (opened)	1 to 2 months
Venison	Not safe	2 to 3 days	2 to 3 months (ground); 6 to 9 months (roasts and steaks)
Chicken or turkey, whole	Not safe	1 to 2 days	1 year
Chicken or turkey, pieces	Not safe	1 to 2 days	9 months
Commercially canned meat, poultry or fish	2 to 5 years	3 to 4 days (opened)	-
Fresh fish or shellfish	Not safe	1 to 2 days	3 to 6 months
Eggs, raw in shell	Not safe	3 to 5 weeks	
Do not freeze in shell. Beat yolks and whites together, then freeze (freezing eggs)
Raw egg yolks, whites	Not safe	2 to 4 days	
1 year (freezing eggs)
Hard cooked eggs	Not safe	1 week	Do not freeze
Liquid pasteurized eggs or egg substitutes (unopened)	Not safe	10 days	1 year
Liquid pasteurized eggs or egg substitutes (opened)	Not safe	3 days	Do not freeze
Leftovers with meat, fish, poultry or egg	Not safe	3 to 4 days	2 to 3 months
Return to Top of Page.

Milk and Dairy Products
Food	Room temperature such as in a pantry or in a cupboard (50 to 70°F)	Refrigerator at 40°F or below	Freezer at 0°F or below (storage times are for quality only)
Butter	May be left at room temperature for 1 to 2 days	1 to 2 months	6 to 9 months
Cheese, hard - Cheddar, Swiss, block Parmesan, etc.	-	6 months (unopened); 3 to 4 weeks (opened)	6 months
Cheese, processed	-	3 to 4 weeks	Does not freeze well
Cheese, shredded - Cheddar, Mozzarella, etc.	Not safe	1 month	3 to 4 months
Cheese, soft - Brie, Bel paese, etc.	Not safe	1 to 2 weeks	6 months
Cottage or ricotta cheese	Not safe	2 weeks (unopened); 1 week (opened)	Does not freeze well
Cream cheese	Not safe	2 weeks	Does not freeze well
Ice cream	Not safe	-	2 to 4 months
Margarine	-	6 months	12 months
Milk	Not safe	7 days	3 months
Milk - canned evaporated or condensed	1 year	4 to 5 days (opened)	
Non-dairy milk alternates - almond, soy, rice, etc.	-	7 to 10 days after opening	Does not freeze well
Sour cream	Not safe	1 to 2 weeks	Does not freeze well
Yogurt	Not safe	1 to 2 weeks	1 to 2 months
Return to Top of Page.
class GroceryType(db.Model):
    __tablename__ = "grocery_types"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False, unique=True)
    image = db.Column(db.String(255))
    days_to_expiry = db.Column(db.Integer, nullable=False)

                GroceryType(
                type='Apples',
                days_to_expiry=28),
                GroceryType(
                type='Apples',
                days_to_expiry=28),
Fruits
Always refrigerate fruit that is purchased pre-cut or packaged. Wash all produce thoroughly under running water before preparing and/or eating. Washing fruit with soap, detergent, or commercial produce wash is not recommended. These storage times are approximate - some fruits may keep longer or shorter than the time listed - always check for signs of spoilage. For more information, check out Selecting and Serving Produce Safely from the FDA.
Food	Room temperature such as in a pantry or in a cupboard (50 to 70°F)	Refrigerator at 40°F or below	Freezer at 0°F or below (storage times are for quality only)
Apples	3 weeks	4 to 6 weeks	
8 months (freezing apples)


Avocados	Until ripe - tender, fully developed and ready to eat	3 to 4 days	
8 months (freezing avocados)
Bananas	Until ripe - tender, fully developed and ready to eat	3 days	
2 to 3 months (freezing bananas)
Blueberries	Not recommended	1 to 2 weeks	
8 to 12 months (freezing blueberries)
Citrus fruits - orange, grapefruit, clementines, etc.	10 days	10 to 21 days	
4 to 6 months (freezing citrus fruits)
Dried fruit	6 months (unopened); 1 month (opened)	6 months	
Grapes	1 day	1 week	
1 month (whole) (freezing grapes)
Melons	Until ripe - tender, fully developed and ready to eat	2 weeks (uncut), 2 to 4 days after cutting	
1 month for balled melon (freezing melons)
Peaches, nectarines, plums or pears	Until ripe - tender, fully developed and ready to eat, then 1-2 days	3-5 days	
8 to 12 months (freezing peaches or nectarines, plums, pears)
Pineapple	Until ripe - tender, fully developed and ready to eat, then 1-2 days	5 to 7 days	
8 to 12 months (freezing pineapple)
Strawberries	Not recommended	2 to 3 days	
8 to 12 months (freezing strawberries)
Return to Top of Page.

Vegetables
Always refrigerate vegetables that are purchased pre-cut or packaged. Wash all produce thoroughly under running water before preparing and/or eating. Washing vegetables with soap, detergent, or commercial produce wash is not recommended. These storage times are approximate - some vegetables may keep longer or shorter than the time listed - always check for signs of spoilage. For more information, check out Selecting and Serving Produce Safely from the FDA.
Food	Pantry or cupboard at room temperature (50 to 70°F)	Refrigerator at 40°F or below	Freezer at 0°F or below (storage times are for quality only)
Asparagus	-	3 to 4 days	
5 months (freezing asparagus)
Bagged greens	-	3 to 5 days (unopened); 2 days (opened)	Does not freeze well
Broccoli	-	3 to 5 days	
10 to 12 months (freezing broccoli)
Brussels sprouts	-	3 to 5 days	
10 to 12 months (freezing Brussels sprouts)
Cabbage	-	1 to 2 weeks	
10 to 12 months (freezing cabbage)
Carrots	-	2 to 3 weeks	
10 to 12 months (freezing carrots)
Cauliflower	-	3 to 5 days	
10 to 12 months (freezing cauliflower)
Celery	-	1 to 2 weeks	
10 to 12 months (freezing celery)
Corn on the cob	-	1 to 2 days	
8 months (freezing corn)
Cucumbers	-	4 to 6 days	Does not freeze well
Dried beans, lentils or split peas	1 to 2 years	3 to 4 days (cooked)	6 months (cooked)
Onions	1 month	2 months	
10 to 12 months (freezing onions)
Potatoes	1 month	-	
10 to 12 months (freezing potatoes)
Spinach or leaf lettuce	-	3 to 7 days	
10 to 12 months (freezing spinach); lettuce does not freeze well
Summer squash or zucchini	1 to 5 days	4 to 5 days	
10 to 12 months (freezing summer squash or zucchini)
Tomatoes	Until ripe, then 7 days	1 to 2 days if ripe, otherwise store at room temperature	
2 months (freezing tomatoes)
Winter squash	1 to 2 months	1 to 2 weeks (cut)	
10 to 12 months (freezing winter squash)
Return to Top of Page.

Dry Foods/Staples
Food	Pantry or cupboard at room temperature (50 to 70°F)	Refrigerator at 40°F or below	Freezer at 0°F or below (storage times are for quality only)
Baking powder	6 to 18 months (unopened); 3 to 6 months (opened)		
Baking soda	2 to 3 years (unopened); 6 months (opened)		
Bouillon cubes or granules	1 year		
Bread, brownie, cake or cookie mixes	12 to 18 months		
Cereals, ready-to-eat	6 to 12 months (unopened); 2 to 3 months (opened)		
Cornmeal	6 to 12 months		2 years
Flour, white	6 to 12 months (unopened); 6 to 8 months (opened)	12 months (opened)	2 years
Flour, whole wheat	3 to 6 months	6 to 8 months	2 years
Herbs, dried	1 to 2 years		
Oatmeal	12 months (unopened); 6 to 12 months (opened)		
Oil - vegetable or olive	6 to 12 months (unopened); 3 to 5 months (opened)	4 months (opened)	
Pasta	1 to 2 years		
Peanut butter	6 to 24 months (unopened); 2 to 3 months (opened)		
Popcorn - dry kernels in a jar	2 years (unopened); 1 year (opened)		
Popcorn - microwave packets	2 to 3 months		
Quinoa	2 to 3 years		
Rice, brown	1 year		
Rice, white or wild	2 years		
Spices, ground	2 to 3 years		
Spices, whole	3 to 4 years		
Sugar - brown, powdered, granulated	18 to 24 months		
Yeast	2 years or 'Best if Used by' date on container (unopened)	4 months (opened)	6 months (opened)
Return to Top of Page.

Condiments, Sauces and Canned Goods
Food	Room temperature such as in a pantry or in a cupboard (50 to 70°F)	Refrigerator at 40°F or below	Freezer at 0°F or below (storage times are for quality only)
Barbecue sauce	1 year	4 months*	
Commercially canned food, high acid (juices, fruit, tomato soup, etc.)	12 to 18 months (canned items will be safe to eat well past the 'use-by' or 'best by' date as long as the can shows no dents, rust, or swelling)	5 to 7 days after opening	

Commercially canned food, low acid (meat, soups, beans, carrots, corn, peas, etc.)	2 to 5 years (canned items will be safe to eat well past the 'use-by' or 'best by' date as long as the can shows no dents, rust, or swelling)	3 to 4 days after opening	
Honey	2 years		
Hummus (commercial- pasteurized with preservatives)	Not safe	3 months (unopened); 7 days (opened)	
Hummus (traditional - no preservatives, not pasteurized)	Not safe	7 days	
Jams, jellies and preserves (commercial)	6 to 18 months (unopened)	6 to 12 months (opened)	
Ketchup, cocktail or chili sauce	1 year (unopened)	6 months* (opened)	
Mayonnaise (commercial)	3 to 6 months (unopened)	
2 months* (opened)
Mustard	1 to 2 years (unopened)	1 year*	
Salad dressings (commercial, bottled)	10 to 12 months (unopened)	1 to 3 months* (opened)	
Salsa, picante and taco sauces	1 year (unopened)	1 month (opened)	
Spaghetti or pizza sauce in jars	18 months	4 days (opened)	
Pickles	1 year (unopened)	1 to 3 months (opened)	
Vinegar	2 years (unopened); 1 year (opened)		
Return to Top of Page.

Baked Goods
Food	Room temperature such as in a pantry or in a cupboard (50 to 70°F)	Refrigerator at 40°F or below	Freezer at 0°F or below (storage times are for quality only)
Bagels, commercially frozen		1 to 2 weeks after thawing	3 months
Bagels, fresh baked	1 to 2 days		3 months
Bread, homemade	3 to 5 days		3 months
Bread products, baked commercially such as bread, flat breads, rolls, buns, etc.	14 to 18 days	2 to 3 weeks	3 to 5 months
Cakes and muffins, baked commercially	3 to 7 days	7 to 10 days	6 months
Cookie dough	Not safe	Use by date on label	2 months
Cookies, homemade	2 to 3 weeks		6 to 12 months
Cookies, packaged	2 months		12 to 18 months
Doughnuts	1 to 2 days	2 days	1 month
Pies, cream	2 hours	3 to 4 days	
Pies, fruit	1 to 2 days	1 week	8 months
Pie, pumpkin	2 hours	3 to 4 days	1 to 3 months
Tortillas, flour	3 months	3 months (opened)	6 months
Tube cans of biscuits, rolls, pizza dough, etc.	Not safe	Use by date on can	Not recommended
Waffles or pancakes, purchased frozen	Not safe	3 to 4 days	2 months